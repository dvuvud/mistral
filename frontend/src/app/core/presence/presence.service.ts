import { Injectable, signal } from '@angular/core';
import { inject } from '@angular/core/primitives/di';
import { WebsocketService, WsMailbox, WsPresenceChangeMessage } from '../websocket/websocket.service';
import { Subject } from 'rxjs';

export interface Teacher {
  name: string,
  room: string,
  userId: number,
  color: string
}

@Injectable({
  providedIn: 'root',
})
export class Presence {
  socket = inject(WebsocketService);
  connectedTeachers = signal<Teacher[]>([]);
  private _teacherUpdates = new Subject<Teacher>();
  readonly teacherUpdates = this._teacherUpdates.asObservable();

  async init() {
    await this.socket.ensureConnected();
    this.socket.getMessages(WsMailbox.presence).subscribe((message) => {
      console.log("From presence service", message);
      this.handleMessage(message as WsPresenceChangeMessage)
    })
  }

  spoofTeacherUpdate() {
    console.log("Spoofing teacher");
    this._teacherUpdates.next({ name: "Spoof", userId: -1, room: "Spoof", color: "#ffffff"});
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

    const msgTeacher = { userId: msg.userId, name: msg.name, room: msg.room!, color: msg.color};
    const updated = this.connectedTeachers().filter((teacher: Teacher) => {
      return teacher.userId != msg.userId;
    });
    this.connectedTeachers.set(updated);
    console.log("Someone left, new status: ", this.connectedTeachers());
    this._teacherUpdates.next(msgTeacher);
  }

  private handleJoinMessage(msg: WsPresenceChangeMessage) {
    if (!msg.room)
      console.error("Incorrectly formatted join message in presence service: ", msg);

    const index = this.connectedTeachers().findIndex((teacher: Teacher) => {
      return teacher.userId == msg.userId;
    });

    const msgTeacher: Teacher = { userId: msg.userId, name: msg.name, room: msg.room!, color: msg.color};

    if (index == -1) {
      const updated = this.connectedTeachers();
      updated.push(msgTeacher);
      this.connectedTeachers.set(updated);
    }
    else {
      const updated = this.connectedTeachers();
      updated[index].room = msg.room!;
      this.connectedTeachers.set(updated);
    }
    console.log("Someone joined, new status: ", this.connectedTeachers());
    this._teacherUpdates.next(msgTeacher);
  }

  private handleStateMessage(msg: WsPresenceChangeMessage) {
    if (msg.users) {
      const withColors = msg.users.map((teacher) => {
        const res: Teacher = { ...teacher }
        return res;
      });
      this.connectedTeachers.set(withColors)
    };
    console.log(this.connectedTeachers());
  }

  randomColor() {
    const num = Math.floor((Math.random() * 256 * 256 * 256));
    return "#" + num.toString(16);
  }
}
