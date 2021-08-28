import { User } from "./User";

export interface Message {
    _id: string,
    message: string,
    createdAt: string,
    user: User
}