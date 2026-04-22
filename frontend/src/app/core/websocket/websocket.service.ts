import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

type WsType = 'subscribe' | 'unsubscribe' | 'message';

export type WsMessageType = WsAttendanceMessage | WsJournalMessage;

interface WsPayload {
  type: WsType;
  room: string;
  body: WsMessageType;
}

export interface WsAttendanceMessage {
  childId: number,
  present: boolean
}

export interface WsJournalMessage {
  journalId: number,
  present: boolean
}

@Injectable({
  providedIn: 'root',
})

export class WebsocketService {
  private socket: WebSocket | null = null;
  private messages = new Subject<WsMessageType>();
  private roomName = '';

  connect(url: string, roomName: string): void {
    const token = localStorage.getItem("token");
    this.socket = new WebSocket(`${url}?token=${token}`);
    this.roomName = roomName;

    this.socket.onopen = () => {
      console.log("Connected");
      this.socket?.send(JSON.stringify({ type: 'subscribe', room: this.roomName}));
    };

    this.socket.onmessage = (event) => {
      // Parse outer JSON object
      const rawJSON = JSON.parse(event.data);
      if (rawJSON.body == undefined) {
        console.error("WebSocket message contains no body!");
        return;
      }

      // Parse inner JSON object (nested body property)
      rawJSON.body = JSON.parse(rawJSON.body);
      const payload: WsPayload = rawJSON;
      if (payload.room != this.roomName) {
        console.error(`WebSocket message room mismatch! ([Service] = ${this.roomName} vs [Message] = ${payload.room})`);
        return;
      }

      // Broadcast the parsed JSON object
      console.log(`Received from WebSocket (room = ${this.roomName}):`);
      console.log(payload.body);
      this.messages.next(payload.body);
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

  sendMessage(message: WsMessageType): void {
    const msgAsString = JSON.stringify({ type: 'message', room: this.roomName, body: JSON.stringify(message) });
    console.log("Sending off ", msgAsString)
    this.socket?.send(msgAsString);
  }

  getMessages(): Observable<WsMessageType> {
    return this.messages.asObservable();
  }
}
