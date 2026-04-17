import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Child {
  id: number;
  name: string;
}

@Injectable({ providedIn: 'root' })
export class ChildService {

  private url = "http://localhost:8080/api/children";

  private http = inject(HttpClient);

  getChildren(): Observable<Child[]> {
    return this.http.get<Child[]>(this.url);
  }
}
