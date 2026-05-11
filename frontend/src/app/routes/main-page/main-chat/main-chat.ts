import { Component, inject, signal } from "@angular/core";
import { ChatService, ChatMessage } from "../../../core/chat/chat.service";
import { WebsocketService, WsChatMessage, WsMailbox } from "../../../core/websocket/websocket.service"; 
import { userService, User } from "../../../core/user/user.service";

@Component({
    selector: 'main-chat',
    templateUrl: './main-chat.html',
    styleUrl: './main-chat.scss'
})

export class MainChat {
    currentUserId = Number(localStorage.getItem('UserId'));
    users= signal<User[]>([]);
    selectedTeacher = signal<User | null> (null);
    messages = signal<ChatMessage[]>([]);
    newMessage = signal<string>('');

    private chatService = inject(ChatService);
    private websocketService = inject(WebsocketService);
    private userService = inject(userService);

}
