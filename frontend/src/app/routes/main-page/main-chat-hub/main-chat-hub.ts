import { Component, inject, model, OnDestroy, OnInit, signal, viewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { User, UserService } from '../../../core/user/user.service';
import { ChatMessage, ChatService } from '../../../core/chat/chat.service';
import { WebsocketService, WsChatMessage, WsMailbox } from '../../../core/websocket/websocket.service';
import { MatActionList } from "@angular/material/list";
import { MatIconButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatCard, MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from '@angular/material/tooltip';

/**
 * MainChatHub component serves as the central hub for chat interactions in the application.
 * It allows users to select a teacher to chat with, view chat history, and send new messages.
 * The component manages WebSocket connections to receive real-time chat updates and handles user interactions for chatting.
 */
@Component({
  selector: 'main-chat-hub',
  imports: [MatActionList, MatIconButton, MatInputModule, FormsModule, MatFormFieldModule, MatCardModule, MatIconModule, MatTooltipModule],
  templateUrl: './main-chat-hub.html',
  styleUrl: './main-chat-hub.scss',
  host: {
    "[class.chat-visible]": "chatVisible()"
  }
})

export class MainChatHub implements OnInit, OnDestroy {
  userId = Number(sessionStorage.getItem('UserId'));
  users = signal<User[]>([]);
  selectedTeacher = signal<User | null> (null);
  messages = signal<ChatMessage[]>([]);
  newMessage = model<string>('');

  chatView = viewChild<MatCard>("chatViewDisplay");

  private subs = new Subscription();

  private chatService = inject(ChatService);
  private websocketService = inject(WebsocketService);
  private userService = inject(UserService);

  viewState = signal<string>("overview");

  enterClass = signal<string>("enter-animation");
  chatVisible = signal<boolean>(false);
  private messageNotificationSound = new Audio("message.ogg");
  doShakeAnimation = signal<boolean>(false);
  minutesBeforeNewDate = 3;

  /**
   * On component initialization, to ensure the WebSocket connection is established
   * and subscribe to incoming chat messages from the WebSocket service.
   */
  async ngOnInit(): Promise<void> {
    this.messageNotificationSound.load();
    await this.websocketService.ensureConnected();
    // Load the list of users (teachers) for the chat
    this.subs.add(
      this.userService.getUsers().subscribe(users => {
        this.users.set(users);
      })
    );
    this.subs.add(
      this.websocketService.getMessages(WsMailbox.chat).subscribe((message) => {
        this.handleMessage(message as WsChatMessage);
      })
    )
  }

  /**
   *  Unsubscribe from all subscriptions when the component is destroyed
   * This prevents memory leaks and stops updates after the component is gone
   */
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  /**
   * Select a teacher for the chat and set the chat room.
   * @param teacher The teacher to select.
   */
  onSelectTeacher(teacher: User) {
    this.selectedTeacher.set(teacher);
    this.viewState.set("chat");
    const recipientId = teacher.id ?? teacher.userId;

    this.messages.set([]);
    this.subs.add(
      this.chatService.getHistory(this.userId, recipientId).subscribe({
        next: (history) => this.messages.set(history),
        error: () => this.messages.set([])
      })
    );

    this.websocketService.setChatRoom(
      this.chatService.createChatRoomId(this.userId, recipientId)
    );
    console.log(teacher);
  }

  /**
   * Select all users for the chat.
   */
  onSelectAll() {
    this.viewState.set("chat");
  }

  /**
   * Return to the overview state, which likely shows the list of teachers or chat options.
   */
  returnToOverview() {
    this.viewState.set("overview");
  }

  /**
   * Submit a new chat message.
   */
  submitMessage() {
    const selected = this.selectedTeacher();
    if (selected == null || selected == undefined || this.newMessage() == "") {
      return;
    }

    const msg: WsChatMessage = {
      senderId: this.userId,
      recipientId: selected.id ?? selected.userId,
      chatMessage: this.newMessage(),
      timestamp: this.chatService.createLocalDateTime()
    }

    this.websocketService.sendChatMessage(msg);
    this.messages.update(current => [...current, msg]);
    this.newMessage.set("");
  }

  /**
   * Handle an incoming chat message.
   * @param message The incoming chat message.
   */
  handleMessage(message: WsChatMessage): void {
    this.messages.update(current => [...current, message]);
    this.doShakeAnimation.set(true);
    this.messageNotificationSound.play();
    console.log(message);
  }

  convertDate(dateString: string): string {
    const d = new Date(dateString);
    return d.toLocaleString("sv-SE", { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone, hour: "2-digit", minute: "2-digit", day: "2-digit", month: "2-digit", year: "numeric" });
    //return `${d.getHours()}:${d.getMinutes()} (${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()})`
  }

  deltaTimeMinutes(dateStringPrev: string, dateStringNext: string) {
    const d1 = new Date(dateStringPrev);
    const d2 = new Date(dateStringNext);
    return Math.abs((d2.getTime() - d1.getTime()) / 60000);
  }

}
