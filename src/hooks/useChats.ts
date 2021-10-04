import { useStore } from "./useStore";
import { useState, useEffect } from "react";
import { where, query, collection, onSnapshot } from "firebase/firestore";
import { IChat } from "../types";
import { db } from "../firebase";
export const useChats = () => {
  const [chats, setChats] = useState<IChat[]>([]);
  const { user, isUserActive } = useStore();
  const qChat = query(
    collection(db, "chats"),
    where("members", "array-contains", user.id)
  );

  useEffect(() => {
    if (!isUserActive) return;
    //listen changes in the chat
    const unsubscribe = onSnapshot(qChat, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const chat = doc.data() as IChat;
        chat.id = doc.id;
        setChats([...chats, chat]);
      });
    });
    return () => unsubscribe();
  }, [isUserActive]);
  return { chats };
};
