/**
 * @typedef UserResponseData
 * @property {string} id
 * @property {string} active
 * @property {string} name
 * @property {string} email
 * @property {string} token
 */
export interface UserResponse {
    id: string;
    active: boolean;
    name: string;
    email: string;
    token?: string;
}