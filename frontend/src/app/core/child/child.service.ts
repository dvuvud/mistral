import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export type Child = {
  id: number;
  name: string;
};

@Injectable({ providedIn: 'root' })
export class ChildService {

  private url = "http://localhost:8080/api/children";

  constructor(private http: HttpClient) {}

  getChildren(): Observable<Child[]> {
    return this.http.get<Child[]>(this.url);
  }
}