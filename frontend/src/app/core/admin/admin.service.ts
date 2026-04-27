import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { environment } from '../../../environments/environment';

export interface GroupResponse {
    id: number;
    name: string;
}
export interface ChildResponse {
    id: number;
    name: string;
}

export interface ChildWithGroupResponse {
    id: number;
    name: string;
    group: GroupResponse | null;
}

export interface UserResponse {
    id: number;
    name: string;
    role: string;
    email: string;
}

@Injectable({ providedIn: 'root' })
export class AdminService {


    private adminUrl = "http://localhost:8080/api/admin";
    private http = inject(HttpClient);

    createChild(name: string): Observable<any> {
        return this.http.post(`${this.adminUrl}/child`, { name });
    }

    createGroup(name: string): Observable<any> {
        return this.http.post(`${this.adminUrl}/group`, { name });
    }

    getAllChildren(): Observable<ChildWithGroupResponse[]> {
        return this.http.get<ChildWithGroupResponse[]>(`${this.adminUrl}/children`);
    }


    getAllGroups(): Observable<GroupResponse[]> {
        return this.http.get<GroupResponse[]>(`${this.adminUrl}/groups`);
    }


    assignChildToGroup(groupId: number, childId: number): Observable<any> {
        return this.http.put(`${this.adminUrl}/group/${groupId}/child/${childId}`, {});
    }


    deleteChild(id: number): Observable<any> {
        return this.http.delete(`${this.adminUrl}/child/${id}`);
    }

    //TODO
    activateUser() { }
}
