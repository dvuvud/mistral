import { Component, inject, model, OnDestroy, OnInit, signal } from '@angular/core';
import { Subscription } from 'rxjs';
import { User, UserService } from '../../../core/user/user.service';
import { ChatMessage, ChatService } from '../../../core/chat/chat.service';
import { WebsocketService, WsChatMessage, WsMailbox } from '../../../core/websocket/websocket.service';
import { AsyncPipe } from '@angular/common';
import { MatActionList } from "@angular/material/list";
import { MatIconButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";

/**
 * MainChatHub component serves as the central hub for chat interactions in the application.
 * It allows users to select a teacher to chat with, view chat history, and send new messages.
 * The component manages WebSocket connections to receive real-time chat updates and handles user interactions for chatting.
 */
@Component({
  selector: 'main-chat-hub',
  imports: [AsyncPipe, MatActionList, MatIconButton, MatInputModule, FormsModule, MatFormFieldModule, MatCardModule, MatIconModule],
  templateUrl: './main-chat-hub.html',
  styleUrl: './main-chat-hub.scss',
})

export class MainChatHub implements OnInit, OnDestroy {
  userId = Number(sessionStorage.getItem('UserId'));
  users= signal<User[]>([]);
  selectedTeacher = signal<User | null> (null);
  messages = signal<ChatMessage[]>([]);
  newMessage = model<string>('');


  private subs = new Subscription();

  private chatService = inject(ChatService);
  private websocketService = inject(WebsocketService);
  private userService = inject(UserService);

  teacherList = this.userService.getUsers().pipe();
  viewState = signal<string>("overview");

  /**
   * On component initialization, to ensure the WebSocket connection is established
   * and subscribe to incoming chat messages from the WebSocket service. 
   */
  async ngOnInit(): Promise<void> {
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
    console.log(message);
  }

}
