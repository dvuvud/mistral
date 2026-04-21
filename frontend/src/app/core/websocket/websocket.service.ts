import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable, Subject } from 'rxjs';

type WsType = 'subscribe' | 'unsubscribe' | 'message';

interface webPayload {
  type: WsType;
  room: string;
  body?: unknown;
}

@Injectable({
 providedIn: 'root',
})

export class WebsocketService {
  private socket: WebSocket | null = null;
  private messages: Subject<any> = new Subject();
  private roomName: string = '';

  connect(url: string, roomName: string): void {
    const token = localStorage.getItem("token");
    this.socket = new WebSocket(`${url}?token=${token}`);
    this.roomName = roomName;

    this.socket.onopen = () => {
      console.log("Connected");
      this.socket?.send(JSON.stringify({ type: 'subscribe', room: this.roomName}));
    };

    this.socket.onmessage = (event) => {
      console.log("Received:", event.data);
      this.messages.next(JSON.parse(event.data));
    };

    this.socket.onclose = (event) => {
      console.log("Disconnected", event.code, event.reason);
      this.socket?.send(JSON.stringify({ type: 'unsubscribe', room: this.roomName}));
    };
  }

  disconnect(): void {
    if (this.socket) {
      this.socket.close();
      this.socket = null;
    }
  }

  sendMessage(message: string): void {
    this.socket?.send(JSON.stringify({ type: 'message', room: this.roomName, body: message }));
  }

  getMessages(): Observable<any> {
    return this.messages.asObservable();
  }
}