export interface IChat {
  id: string;
  lastMessage: string;
  timestamp: Date;
  members: string[];
}
export interface IGroup extends IChat {
  title: string;
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
