import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { User } from '../user/user.service';
import { AttendanceStatus } from '../child/attendance.service';

const DEBUG = true;

type WsMessageType = "ATTENDANCE" | "DOC_OPERATION" | "PRESENCE_STATE" | "PRESENCE_LEAVE" | "PRESENCE_JOIN" | "CHAT_MESSAGE"
export type WsJournalWriteOperation = InsertOperation | DeleteOperation;

export enum WsMailbox {
  attendance = "attendanceMessages",
  presence = "presenceMessages",
  journal = "journalMessages",
  chat = "chatMessages"
}

export interface WsMessageContent {
  room?: string,
  type?: WsMessageType,
  [key: string]: unknown
}

export interface WsPresenceChangeMessage extends WsMessageContent {
  name: string,
  userId: number,
  users?: User[],
  color: string
}

export interface WsAttendanceMessage extends WsMessageContent {
  childId: number,
  status: AttendanceStatus;
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

export interface WsChatMessage {
  senderId: number,
  recipientId: number,
  chatMessage: string,
  timestamp: string
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
  private observedSocket: ReplaySubject<WebSocket> = new ReplaySubject<WebSocket>(1);
  private connectedSocket: WebSocket | null = null;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private mailboxes: Record<string, Subject<any>> = {
    "attendanceMessages": new Subject<WsAttendanceMessage>(),
    "presenceMessages": new Subject<WsPresenceChangeMessage>(),
    "journalMessages": new Subject<WsJournalMessage>(),
    "chatMessages": new Subject<WsChatMessage>()
  }

  private rooms: Record<string, string> = {
    attendance: "",
    journal: "",
    chat: ""
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
        break;
      case "CHAT_MESSAGE":
        this.mailboxes[WsMailbox.chat].next(msg);
        break;
    }
  }

  connect(url: string): void {
    this.observedSocket = new ReplaySubject<WebSocket>(1);
    const token = sessionStorage.getItem("token");
    const socket = new WebSocket(`${url}?token=${token}`);

    socket.onmessage = (event) => {
      const rawJSON = JSON.parse(event.data);
      if (DEBUG) console.log("[Websocket] - Received:", rawJSON);
      this.deliverMessage(rawJSON);
    };

    socket.onclose = (event) => {
      if (DEBUG) console.log("[Websocket] - Disconnected", event.code, event.reason);
    };

    socket.onopen = () => {
      if (DEBUG) console.log("[Websocket] - Connected");
      this.observedSocket.next(socket);
      this.connectedSocket = socket;
    }

  }

  disconnect(): void {
    if (this.connectedSocket == null) {
      console.error("[Websocket] - Tried disconnecting an unconnected websocket.");
      return;
    }

    for (const value of Object.values(this.rooms)) {
      if (value === "")
        continue;
      this.connectedSocket.send(JSON.stringify({ type: 'unsubscribe', room: value}));
    }
    this.connectedSocket.close();
    this.observedSocket.complete();
  }

  async ensureConnected(): Promise<void> {
    return new Promise<void>((resolve) => {
      this.observedSocket.subscribe(() => {
        resolve();
      });
    });
  }

  private setRoom(socketRoom: string, newRoom: string): void {
    if (this.connectedSocket == null) {
      console.error("[Websocket] - Attempted to set room of an unconnected socket");
      return;
    }

    if (this.rooms[socketRoom] !== "") {
      this.leaveRoom(socketRoom);
    }

    this.rooms[socketRoom] = newRoom;
    if (this.connectedSocket.readyState == this.connectedSocket.OPEN) {
      if (DEBUG) console.log("[Websocket] - Subscribing:", JSON.stringify({ type: 'subscribe', room: newRoom }));
      this.connectedSocket.send(JSON.stringify({ type: 'subscribe', room: newRoom}));
    }
  }

  setAttendanceRoom(newRoom: string): void {
    this.setRoom("attendance", newRoom);
  }

  setJournalRoom(newRoom: string): void {
    this.setRoom("journal", newRoom);
  }

  private leaveRoom(socketRoom: string): void {
    if (this.connectedSocket == null) {
      console.error("[Websocket] - Tried to leave room on unconnected socket.");
      return;
    }

    if (this.rooms[socketRoom] == "")
      return;

    if (DEBUG) console.log("[Websocket] - Unsubscribing:", JSON.stringify({ type: 'unsubscribe', room: this.rooms[socketRoom] }));
    this.connectedSocket.send(JSON.stringify({ type: 'unsubscribe', room: this.rooms[socketRoom] }));
    this.rooms[socketRoom] = "";
  }

  leaveAttendanceRoom(): void {
    this.leaveRoom("attendance");
  }

  leaveJournalRoom(): void {
    this.leaveRoom("journal");
  }

  leaveChatRoom(): void {
    this.leaveRoom("chat");
  }

  sendMessage(type: WsMessageType, message: WsMessageContent): void {
    if (this.connectedSocket == null) {
      console.error("[Websocket] - Tried to send message on unconnected socket.");
      return;
    }


    message.room = this.rooms[type == "ATTENDANCE"
      ? "attendance"
      : type == "CHAT_MESSAGE"
        ? "chat"
        : "journal"];
    message.type = type;
    const msgAsString = JSON.stringify({ ...message });
    if (DEBUG) console.log("[Websocket] - Sending off: ", msgAsString);
    this.connectedSocket.send(msgAsString);
  }

  sendAttendanceUpdate(message: WsAttendanceMessage): void {
    this.sendMessage("ATTENDANCE", message);
  }

  sendJournalUpdate(message: WsJournalMessage): void {
    this.sendMessage("DOC_OPERATION", message);
  }

<<<<<<< HEAD
  setChatRoom(newRoom: string): void {
    this.setRoom("chat", newRoom);
  }

  sendChatMessage(message: WsChatMessage): void {
    const payload = JSON.stringify({ type: "CHAT_MESSAGE", room: this.rooms["chat"], message });
    if (DEBUG) console.log("[Websocket] - Sending off: ", payload);
    this.connectedSocket?.send(payload);
  }

  getMessages(mailbox: WsMailbox): Observable<WsMessageContent> {
    return this.mailboxes[mailbox].asObservable();
=======
  sendChatMessage(room: string, message: WsChatMessage): void {
    const payload= JSON.stringify({type: "CHAT_MESSAGE", room, message})
    this.socket?.send(payload);
  }

  getMessages(): Observable<WsMessageContent> {
    return this.messages.asObservable();
>>>>>>> 3d6a475 (lagt till chatttyper i WebsocketService)
  }
}
