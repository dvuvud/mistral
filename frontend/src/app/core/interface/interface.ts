export interface Child {
  id: number;
  name: string;
  date: string | null;
  present: boolean | null;
  group?: {
    id: number;
    name: string;
  } | null;
}


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