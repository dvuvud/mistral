import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface JournalResponse {
  content: string;
  serverRevision: number;
}

@Injectable({ providedIn: 'root' })
export class JournalService {
  private baseUrl = `${environment.apiUrl}/api/journal`;

  private http = inject(HttpClient);

  getJournal(childId: number): Observable<JournalResponse> {
    console.log(childId);
    if (childId != 0) {
      return this.http.get<JournalResponse>(this.baseUrl + `?childId=${childId}`);
    } else {
      return this.http.get<JournalResponse>(this.baseUrl + `?groupId=${1}`);
    }
  }
}
