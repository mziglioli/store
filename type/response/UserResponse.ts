export interface UserResponse {
    id: string;
    active: boolean;
    name: string;
    email: string;
    token?: string;
}