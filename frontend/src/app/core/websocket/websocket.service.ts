import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export type WsMessageType = WsAttendanceMessage | WsJournalMessage | WsJournalResponse;

export interface WsAttendanceMessage {
  childId: number,
  present: boolean
}

export type operation = InsertOperation | DeleteOperation;

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

export interface WsJournalMessage {
  type: "DOC_OPERATION",
  room: string,
  clientRevision: number,
  operation: operation,
  sequence: number
}

export interface WsJournalResponse {
  type: "DOC_OPERATION",
  operation: operation,
  serverRevision: number,
  userId: number,
  sequence: number
}

@Injectable({
  providedIn: 'root',
})

export class WebsocketService {
  private socket: WebSocket | null = null;
  private messages = new Subject<WsMessageType>();
  roomName = '';

  connect(url: string, roomName: string): void {
    const token = localStorage.getItem("token");
    this.socket = new WebSocket(`${url}?token=${token}`);
    this.roomName = roomName;

    this.socket.onopen = () => {
      console.log("Connected");
      this.socket?.send(JSON.stringify({ type: 'subscribe', room: this.roomName}));
    };

    this.socket.onmessage = (event) => {
      const rawJSON = JSON.parse(event.data);
      this.messages.next(rawJSON);
    };
    

    this.socket.onclose = (event) => {
      console.log("Disconnected", event.code, event.reason);
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

  sendMessage(message: WsMessageType): void {
    const msgAsString = JSON.stringify({ type: 'message', room: this.roomName, body: JSON.stringify(message) });
    console.log("Sending off ", msgAsString)
    this.socket?.send(msgAsString);
  }

  sendMessageJournal(message: WsMessageType): void {
    const msgAsString = JSON.stringify(message);
    console.log("Sending off ", msgAsString)
    this.socket?.send(msgAsString);
  }

  getMessages(): Observable<WsMessageType> {
    return this.messages.asObservable();
  }
}
