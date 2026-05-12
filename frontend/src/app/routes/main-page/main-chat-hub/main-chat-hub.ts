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
    this.subs.add(
      this.websocketService.getMessages(WsMailbox.chat).subscribe((message) => {
        //TODO: Kanske liten validitetscheck?
        this.handleMessage(message as WsChatMessage)
      })
    )
  }
  ngOnDestroy(): void {
    // Rensa alla subscriptions när komponenten förstörs
    this.subs.unsubscribe();
  }

  onSelectTeacher(teacher: User) {
    this.selectedTeacher.set(teacher);
    this.viewState.set("chat");
    const newRoom = `${this.userId}:${this.selectedTeacher()?.id}`;
    this.websocketService.setChatRoom(newRoom);
    console.log(teacher);
  }

  onSelectAll() {
    this.viewState.set("chat");
  }

  returnToOverview() {
    this.viewState.set("overview");
  }

  submitMessage() {
    const selected = this.selectedTeacher();
    if (selected == null || selected == undefined || this.newMessage() == "") {
      return;
    }

    const msg: WsChatMessage = {
      senderId: this.userId,
      recipientId: selected.id ?? selected.userId,
      chatMessage: this.newMessage(),
      timestamp: new Date().getTime().toString()
    }

    this.websocketService.sendChatMessage(msg);
    this.messages.update((current: ChatMessage[]): ChatMessage[] => {
      current.push(msg);
      return current;
    })
    this.newMessage.set("");
  }

  handleMessage(message: WsChatMessage) {
    console.log(message);
  }

}
