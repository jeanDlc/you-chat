import { Timestamp } from "@firebase/firestore";
export type TypeChat = "private" | "group";
export interface IChat {
  id: string;
  lastMessage: string;
  timestamp: Timestamp;
  members: string[];
}
export interface IGroup extends IChat {
  name: string;
  category: string;
}
export interface ICategory {
  name: string;
  id: string;
}
export interface IUser {
  nickName: string;
  chats: Object;
  id: string;
}
export interface IMessage {
  idUser: string;
  name: string;
  text: string;
  timestamp: Timestamp;
}
