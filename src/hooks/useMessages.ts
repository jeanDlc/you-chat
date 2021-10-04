import { useStore } from "./useStore";
import { useState, useEffect } from "react";
import {
  where,
  query,
  collection,
  onSnapshot,
  doc,
  orderBy,
} from "firebase/firestore";
import { IMessage } from "../types";
import { db } from "../firebase";
export const useMessages = (idChat: string) => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const { isUserActive } = useStore();

  useEffect(() => {
    if (!isUserActive) return;
    //listen changes in the chat
    const ref = doc(db, "messages", idChat);

    const unsub = onSnapshot(ref, (doc) => {
      //const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
      const listMessages = doc.data()?.messages as IMessage[];
      setMessages(listMessages);
    });
    return () => unsub();
  }, [isUserActive]);
  return { messages };
};
