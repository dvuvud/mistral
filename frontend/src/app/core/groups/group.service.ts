
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface groupResponse {
  id: number;
  name: string;
}

@Injectable( {providedIn: 'root'} )

export class groupService {
    private url = `${environment.apiUrl}/api/group`;

    private http = inject(HttpClient);

    getGroups(): Observable<groupResponse[]> {
        return this.http.get<groupResponse[]>(this.url);
    }
}




