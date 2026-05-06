import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface ChatMessage {
  senderId: number,
  recipientId: number,
  chatMessage: string,
  timestamp: string
}

@Injectable({ providedIn: 'root' })
export class ChatService {
  private baseUrl = `${environment.apiUrl}/api/chat`;
  private http = inject(HttpClient);

  getHistory(senderId: number, recipientId: number): Observable<ChatMessage[]> {
    const params = new HttpParams()
      .set('senderId', senderId)
      .set('recipientId', recipientId);
    return this.http.get<ChatMessage[]>(`${this.baseUrl}/history`, { params });
  }
}