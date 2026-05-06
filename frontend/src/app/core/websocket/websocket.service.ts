import { Injectable } from '@angular/core';
import {Observable, ReplaySubject, Subject } from 'rxjs';
import { Teacher } from '../presence/presence.service';

type WsMessageType = "ATTENDANCE" | "DOC_OPERATION" | "PRESENCE_STATE" | "PRESENCE_LEAVE" | "PRESENCE_JOIN"
export type WsJournalWriteOperation = InsertOperation | DeleteOperation;
export enum WsMailbox {
  attendance = "attendanceMessages",
  presence = "presenceMessages",
  journal = "journalMessages"
}

export interface WsMessageContent {
  room?: string,
  type?: WsMessageType,
  [key: string]: unknown
}

export interface WsPresenceChangeMessage extends WsMessageContent {
  name: string,
  userId: number
  users?: Teacher[]
}

export interface WsAttendanceMessage extends WsMessageContent {
  childId: number,
  present: boolean
}

export interface WsJournalMessage extends WsMessageContent {
  clientRevision: number,
  operation: WsJournalWriteOperation,
  sequence: number
}

export interface WsJournalResponse extends WsMessageContent {
  operation: WsJournalWriteOperation,
  serverRevision: number,
  userId: number,
  sequence: number
}

export interface InsertOperation {
  type: 'INSERT',
  position: number,
  text: string
}

export interface DeleteOperation {
  type: 'DELETE',
  position: number,
  length: number
}

@Injectable({
  providedIn: 'root',
})

export class WebsocketService {
  //private socket: WebSocket;
  private socket = new ReplaySubject<WebSocket>();

  liveSocket(): Observable<WebSocket> {
    return this.socket.asObservable();
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private mailboxes: Record<string, Subject<any>> = {
    "attendanceMessages": new Subject<WsAttendanceMessage>(),
    "presenceMessages": new Subject<WsPresenceChangeMessage>(),
    "journalMessages": new Subject<WsJournalMessage>()
  }

  private rooms: Record<string, string> = {
    attendance: "",
    journal: ""
  };

  deliverMessage(msg: WsMessageContent) {
    switch (msg.type) {
      case "ATTENDANCE":
        this.mailboxes[WsMailbox.attendance].next(msg);
        break;
      case "DOC_OPERATION":
        this.mailboxes[WsMailbox.journal].next(msg);
        break;
      case "PRESENCE_JOIN":
      case "PRESENCE_LEAVE":
      case 'PRESENCE_STATE':
        this.mailboxes[WsMailbox.presence].next(msg);
    }
  }

  connect(url: string): void {
    const token = localStorage.getItem("token");
    const socket = new WebSocket(`${url}?token=${token}`);
    socket.onmessage = (event) => {
      const rawJSON = JSON.parse(event.data);
      console.log("[Websocket] - Received:", rawJSON);
      this.deliverMessage(rawJSON);
    };

    socket.onclose = (event) => {
      console.log("[Websocket] - Disconnected", event.code, event.reason);
    };

    socket.onopen = () => {
      console.log("[Websocket] - Connected");
      this.socket.next(socket);
    }
  }

  disconnect(): void {
    this.socket.subscribe((ws) => {
      for (const value of Object.values(this.rooms)) {
        if (value === "")
          continue;
        ws?.send(JSON.stringify({ type: 'unsubscribe', room: value}));
      }
      ws.close();
    })
  }

  async ensureConnected(): Promise<void> {
    return new Promise<void>((resolve) => {
      this.socket.subscribe(() => {
        resolve();
      });
    });
  }

  private setRoom(socketRoom: string, newRoom: string): void {

    if (this.rooms[socketRoom] !== "") {
      this.leaveRoom(socketRoom);
    }

    this.socket.subscribe((ws) => {
      this.rooms[socketRoom] = newRoom;
      if (ws != null && ws.OPEN) {
        console.log("[Websocket] - Subscribing:", JSON.stringify({ type: 'subscribe', room: newRoom }));
        ws.send(JSON.stringify({ type: 'subscribe', room: newRoom}));
      }
    })
  }

  setAttendanceRoom(newRoom: string): void {
    this.setRoom("attendance", newRoom);
  }

  setJournalRoom(newRoom: string): void {
    this.setRoom("journal", newRoom);
  }

  private leaveRoom(socketRoom: string): void {
    if (this.rooms[socketRoom] == "")
      return;

    this.socket.subscribe((ws) => {
      console.log("[Websocket] - Unsubscribing:", JSON.stringify({ type: 'unsubscribe', room: this.rooms[socketRoom] }));
      ws.send(JSON.stringify({ type: 'unsubscribe', room: this.rooms[socketRoom] }));
    });
    this.rooms[socketRoom] = "";
  }

  leaveAttendanceRoom(): void {
    this.leaveRoom("attendance");
  }

  leaveJournalRoom(): void {
    this.leaveRoom("journal");
  }

  sendMessage(type: WsMessageType, message: WsMessageContent): void {
    this.socket.subscribe((ws) => {
      message.room = this.rooms[type == "ATTENDANCE" ? "attendance" : "journal"];
      message.type = type;
      const msgAsString = JSON.stringify({ ...message });
      console.log("Sending off ", msgAsString)
      ws.send(msgAsString);
    });
  }

  sendAttendanceUpdate(message: WsAttendanceMessage): void {
    this.sendMessage("ATTENDANCE", message);
  }

  sendJournalUpdate(message: WsJournalMessage): void {
    this.sendMessage("DOC_OPERATION", message);
  }

  getMessages(mailbox: WsMailbox): Observable<WsMessageContent> {
    return this.mailboxes[mailbox].asObservable();
  }
}
