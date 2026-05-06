import { Injectable, signal } from '@angular/core';
import { inject } from '@angular/core/primitives/di';
import { WebsocketService, WsMailbox, WsPresenceChangeMessage } from '../websocket/websocket.service';

export interface Teacher {
  name: string,
  room: string
  userId: number
}

@Injectable({
  providedIn: 'root',
})
export class Presence {
  socket = inject(WebsocketService);
  connectedTeachers = signal<Teacher[]>([]);
  async init() {
    await this.socket.ensureConnected();
    this.socket.getMessages(WsMailbox.presence).subscribe((message) => {
      console.log("From presence service", message);
      this.handleMessage(message as WsPresenceChangeMessage)
    })
  }

  private handleMessage(msg: WsPresenceChangeMessage) {
    switch (msg.type) {
      case "PRESENCE_STATE":
        this.handleStateMessage(msg);
        break;
      case "PRESENCE_JOIN":
        this.handleJoinMessage(msg);
        break;
      case "PRESENCE_LEAVE":
        this.handleLeaveMessage(msg);
        break;
      default:
        console.error("WsPresenceChangeMessage with incorrect type in presence service");
    }
  }

  private handleLeaveMessage(msg: WsPresenceChangeMessage) {
    if (!msg.room)
      console.error("Incorrectly formatted leave message in presence service: ", msg);

    const updated = this.connectedTeachers().filter((teacher: Teacher) => {
      return teacher.userId != msg.userId;
    });
    this.connectedTeachers.set(updated);
    console.log("Someone left, new status: ", this.connectedTeachers());
  }

  private handleJoinMessage(msg: WsPresenceChangeMessage) {
    if (!msg.room)
      console.error("Incorrectly formatted join message in presence service: ", msg);

    const index = this.connectedTeachers().findIndex((teacher: Teacher) => {
      return teacher.userId == msg.userId;
    });

    if (index == -1) {
      const updated = this.connectedTeachers();
      updated.push({ userId: msg.userId, name: msg.name, room: msg.room! });
      this.connectedTeachers.set(updated);
    }
    else {
      const updated = this.connectedTeachers();
      updated[index].room = msg.room!;
      this.connectedTeachers.set(updated);
    }
    console.log("Someone joined, new status: ", this.connectedTeachers());
  }

  private handleStateMessage(msg: WsPresenceChangeMessage) {
    if(msg.users)
      this.connectedTeachers.set(msg.users)
    console.log(this.connectedTeachers());
  }
}
