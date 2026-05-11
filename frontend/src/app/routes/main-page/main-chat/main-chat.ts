import { Component, inject, OnDestroy, OnInit, signal } from "@angular/core";
import { ChatService, ChatMessage } from "../../../core/chat/chat.service";
import { WebsocketService, WsChatMessage, WsMailbox } from "../../../core/websocket/websocket.service"; 
import { userService, User } from "../../../core/user/user.service";
import { Subscription } from "rxjs";

@Component({
    selector: 'main-chat',
    templateUrl: './main-chat.html',
    styleUrl: './main-chat.scss'
})

export class MainChat implements OnInit, OnDestroy {

    userId = Number(localStorage.getItem('UserId'));
    users= signal<User[]>([]);
    selectedTeacher = signal<User | null> (null);
    messages = signal<ChatMessage[]>([]);
    newMessage = signal<string>('');
  // Samlar alla subscriptions för enkel cleanup i ngOnDestroy
    private subs = new Subscription();

    private chatService = inject(ChatService);
    private websocketService = inject(WebsocketService);
    private userService = inject(userService);

   async ngOnInit(): Promise<void> {
    await this.websocketService.ensureConnected();
    // load all teachers for connect list
    this.subs.add(
      this.userService.getUsers().subscribe(users => {
        this.users.set(users);
      })
    );
    this
  }
  ngOnDestroy(): void {
    // Rensa alla subscriptions när komponenten förstörs
    this.subs.unsubscribe();
  }
}
