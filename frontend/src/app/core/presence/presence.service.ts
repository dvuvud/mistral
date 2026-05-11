import { Injectable, signal } from '@angular/core';
import { inject } from '@angular/core/primitives/di';
import { WebsocketService, WsMailbox, WsPresenceChangeMessage } from '../websocket/websocket.service';
import { Subject } from 'rxjs';
import { User } from '../user/user.service';

const DEBUG = true;

@Injectable({
  providedIn: 'root',
})
export class Presence {
  private socketService = inject(WebsocketService);
  connectedTeachers = signal<User[]>([]);
  private _teacherUpdates = new Subject<User>();
  readonly teacherUpdates = this._teacherUpdates.asObservable();

  async init() {
    await this.socketService.ensureConnected();
    this.socketService.getMessages(WsMailbox.presence).subscribe((message) => {
      this.handleMessage(message as WsPresenceChangeMessage)
    })
  }

  spoofTeacherUpdate() {
    console.log("Spoofing teacher");
    this._teacherUpdates.next({ name: "Spoof", userId: -1, room: "Spoof", color: "#ffffff"});
  }

  /**
   * Message type narrowing function
   * @param msg The message to distribute to its proper handler
   */
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

  /**
   * Leave message handler
   * @param msg The leave message body
   */
  private handleLeaveMessage(msg: WsPresenceChangeMessage) {
    if (!msg.room)
      console.error("Incorrectly formatted leave message in presence service: ", msg);

    const msgTeacher = { userId: msg.userId, name: msg.name, room: msg.room!, color: msg.color};
    const updated = this.connectedTeachers().filter((teacher: User) => {
      return teacher.userId != msg.userId;
    });
    this.connectedTeachers.set(updated);
    console.log("Someone left, new status: ", this.connectedTeachers());
    this._teacherUpdates.next(msgTeacher);
  }

  /**
   * Join message handler
   * @param msg The join message body
   */
  private handleJoinMessage(msg: WsPresenceChangeMessage) {
    if (!msg.room)
      console.error("Incorrectly formatted join message in presence service: ", msg);

    const index = this.connectedTeachers().findIndex((teacher: User) => {
      return teacher.userId == msg.userId;
    });

    const msgTeacher: User = { userId: msg.userId, name: msg.name, room: msg.room!, color: msg.color};

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

  /**
   * State message handler. Lists all users currently connected to the presence sevice. Received on socket connection.
   * @param msg The state message body
   */
  private handleStateMessage(msg: WsPresenceChangeMessage) {
    if (msg.users) {
      const withColors = msg.users.map((teacher) => {
        const res: User = { ...teacher }
        return res;
      });
      this.connectedTeachers.set(withColors)
    }
    else {
      console.error("[Presence] - State message received without user array");
    }
  }
}
