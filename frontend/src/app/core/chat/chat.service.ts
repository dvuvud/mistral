import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

/**
 * Interface representing a chat message between two users 
 */
export interface ChatMessage {
  senderId: number,
  recipientId: number,
  chatMessage: string,
  timestamp: string
}

@Injectable({ 
  providedIn: 'root' 
})

/**
 * Service for handling chat-related operations, such as retrieving chat history between users.
 * This service uses Angular's HttpClient to communicate with the backend API and fetch chat messages.
 */
export class ChatService {
  private baseUrl = `${environment.apiUrl}/api/chat`;
  private http = inject(HttpClient);

/**
 * Get chat history between two users
 * 
 * @param senderId - ID of the sender
 * @param recipientId - ID of the recipient
 * @returns Observable of an array of ChatMessage objects
 */
  getHistory(senderId: number, recipientId: number): Observable<ChatMessage[]> {
    const params = new HttpParams()
      .set('senderId', senderId)
      .set('recipientId', recipientId);
    return this.http.get<ChatMessage[]>(`${this.baseUrl}/history`, { params });
  }
}