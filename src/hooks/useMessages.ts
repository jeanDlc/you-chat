import { useStore } from "./useStore";
import { useState, useEffect } from "react";
import { onSnapshot, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { IMessage } from "../types";
import { db } from "../firebase";
export const useMessages = (idChat: string) => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const { isUserActive } = useStore();
  const collectionName = "messages";
  useEffect(() => {
    if (!isUserActive || idChat === "") return;
    //listen changes in the chat
    const ref = doc(db, collectionName, idChat);

    const unsub = onSnapshot(
      ref,
      (doc) => {
        //const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
        const listMessages = doc.data()?.messages as IMessage[];
        console.log("messages", doc.data());
        listMessages && setMessages(listMessages);
      },
      (onerror = () => {
        console.log("error puess");
      })
    );
    return () => unsub();
  }, [isUserActive, idChat]);
  const sendNewMessage = async (msg: IMessage, idChat: string) => {
    //create a new message
    if (msg.text.trim() === "") return;
    try {
      //update messages
      await updateDoc(doc(db, collectionName, idChat), {
        messages: arrayUnion(msg),
      });
    } catch (error) {
      console.log(error, "error in send");
    }
  };
  return { messages, sendNewMessage };
};
