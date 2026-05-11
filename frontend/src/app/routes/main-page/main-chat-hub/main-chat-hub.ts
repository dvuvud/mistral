import { Component, inject, model, OnDestroy, OnInit, signal } from '@angular/core';
import { Subscription } from 'rxjs';
import { User, UserService } from '../../../core/user/user.service';
import { ChatMessage, ChatService } from '../../../core/chat/chat.service';
import { WebsocketService, WsChatMessage } from '../../../core/websocket/websocket.service';
import { AsyncPipe } from '@angular/common';
import { MatActionList } from "@angular/material/list";
import { MatIconButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from "@angular/material/card";

@Component({
  selector: 'main-chat-hub',
  imports: [AsyncPipe, MatActionList, MatIconButton, MatInputModule, FormsModule, MatFormFieldModule, MatCardModule],
  templateUrl: './main-chat-hub.html',
  styleUrl: './main-chat-hub.scss',
})
export class MainChatHub implements OnInit, OnDestroy {
  userId = Number(sessionStorage.getItem('UserId'));
  users= signal<User[]>([]);
  selectedTeacher = signal<User | null> (null);
  messages = signal<ChatMessage[]>([]);
  newMessage = model<string>('');

  // Samlar alla subscriptions för enkel cleanup i ngOnDestroy
  private subs = new Subscription();

  private chatService = inject(ChatService);
  private websocketService = inject(WebsocketService);
  private userService = inject(UserService);

  teacherList = this.userService.getUsers().pipe();
  viewState = signal<string>("overview");

  async ngOnInit(): Promise<void> {
    await this.websocketService.ensureConnected();
    // load all teachers for connect list
    this.subs.add(
      this.userService.getUsers().subscribe(users => {
        this.users.set(users);
      })
    );
  }
  ngOnDestroy(): void {
    // Rensa alla subscriptions när komponenten förstörs
    this.subs.unsubscribe();
  }

  onSelectTeacher(teacher: User) {
    this.selectedTeacher.set(teacher);
    this.viewState.set("chat");
    console.log(teacher);
  }

  onSelectAll() {
    this.viewState.set("chat");
  }

  returnToOverview() {
    this.viewState.set("overview");
  }

  submitMessage() {
    const msg: WsChatMessage = {
      senderId: this.userId,
      recipientId: this.selectedTeacher()?.id ?? this.selectedTeacher().,
      chatMessage: string,
      timestamp: string
    }
    this.websocketService.sendChatMessage()
  }

}
