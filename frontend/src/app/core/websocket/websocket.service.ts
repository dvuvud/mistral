import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export type WsMessageContent = WsAttendanceMessage | WsJournalMessage | WsJournalResponse;
export type WsJournalWriteOperation = InsertOperation | DeleteOperation;
type WsMessageType = "ATTENDANCE" | "DOC_OPERATION";

export interface WsAttendanceMessage {
  childId: number,
  present: boolean
}

export interface WsJournalMessage {
  clientRevision: number,
  operation: WsJournalWriteOperation,
  sequence: number
}

export interface WsJournalResponse {
  type: "DOC_OPERATION",
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
  private socket: WebSocket | null = null;
  private messages = new Subject<WsMessageContent>();
  private roomName = '';

  connect(url: string, roomName: string): void {
    const token = localStorage.getItem("token");
    this.socket = new WebSocket(`${url}?token=${token}`);
    this.roomName = roomName;

    this.socket.onopen = () => {
      this.socket?.send(JSON.stringify({ type: 'subscribe', room: this.roomName}));
      console.log("[Websocket] - Connected");
    };

    this.socket.onmessage = (event) => {
      const rawJSON = JSON.parse(event.data);
      console.log("[Websocket] - Received:", rawJSON);
      this.messages.next(rawJSON);
    };

    this.socket.onclose = (event) => {
      console.log("[Websocket] - Disconnected", event.code, event.reason);
    };
  }

  disconnect(): void {
    if (this.socket) {
      this.socket?.send(JSON.stringify({ type: 'unsubscribe', room: this.roomName}));
      this.socket.close();
      this.socket = null;
    }
  }

  changeRoom(newRoom: string): void {
    this.socket?.send(JSON.stringify({ type: 'unsubscribe', room: this.roomName}));
    this.socket?.send(JSON.stringify({ type: 'subscribe', room: newRoom}));
    this.roomName = newRoom;
  }

  sendMessage(type: WsMessageType, message: WsMessageContent): void {
    const msgAsString = JSON.stringify({ type: type, room: this.roomName, ...message });
    console.log("Sending off ", msgAsString)
    this.socket?.send(msgAsString);
  }

  sendAttendanceUpdate(message: WsAttendanceMessage): void {
    this.sendMessage("ATTENDANCE", message);
  }

  sendJournalUpdate(message: WsJournalMessage): void {
    this.sendMessage("DOC_OPERATION", message);
  }

  getMessages(): Observable<WsMessageContent> {
    return this.messages.asObservable();
  }
}
