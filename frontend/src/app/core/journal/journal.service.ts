import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface JournalResponse {
  content: string;
  serverRevision: number;
}

@Injectable({ providedIn: 'root' })
export class JournalService {
  private baseUrl = "http://localhost:8080/api/journal";

  private http = inject(HttpClient);

  getJournal(childId: number): Observable<JournalResponse> {
    return this.http.get<JournalResponse>(this.baseUrl + `?childId=${childId}`);
  }
}
