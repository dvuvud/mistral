
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

/**
 * groupResponse represents the response from the backend when fetching groups.
 * It includes the group's ID and name.
 */
export interface groupResponse {
  id: number;
  name: string;
}

@Injectable({ providedIn: 'root' })
export class groupService {
  private url = `${environment.apiUrl}/api/group`;

  private http = inject(HttpClient);

  /**
   * Gets the list of groups.
   * @returns An Observable with the list of groups.
   */
  getGroups(): Observable<groupResponse[]> {
    return this.http.get<groupResponse[]>(this.url);
  }
}




