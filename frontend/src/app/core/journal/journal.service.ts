import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { forkJoin, Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface JournalResponse {
  content: string;
  serverRevision: number;
}

@Injectable({ providedIn: 'root' })
export class JournalService {
  private baseUrl = `${environment.apiUrl}/api/journal`;
  private http = inject(HttpClient);

  getJournal(childId: number, groupId: number, currentView: string): Observable<JournalResponse> {
   
    let params = new HttpParams();

    if (currentView === 'childView') {
      params = params.set('childId', childId);
    } else if (currentView === 'groupView') {
      params = params.set('groupId', groupId);
    } else {
      console.error(`Attempted to fetch journal with unknown view: ${currentView}`);
      return throwError(() => new Error('Invalid view type provided to JournalService'));
    }
    return this.http.get<JournalResponse>(this.baseUrl, { params });
  }

  getJournalHistory(childId: number, dates: string[]): Observable<JournalResponse[]> {
    let params = new HttpParams();
    params = params.set('childId', childId);


    const requests = dates.map(date => {
      const requestParams = params.set('date', date);
      return this.http.get<JournalResponse>(this.baseUrl, { params: requestParams });
    });
    
    return forkJoin(requests);
  }
}