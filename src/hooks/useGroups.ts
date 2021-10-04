import { useStore } from "./useStore";
import { useState, useEffect } from "react";
import { where, query, collection, onSnapshot } from "firebase/firestore";
import { IGroup } from "../types";
import { db } from "../firebase";
export const useGroups = () => {
  const [groups, setGroups] = useState<IGroup[]>([]);
  const { user, isUserActive } = useStore();
  const qChat = query(
    collection(db, "group"),
    where("members", "array-contains", user.id)
  );

  useEffect(() => {
    if (!isUserActive) return;
    //listen changes in the chat
    const unsubscribe = onSnapshot(qChat, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const group = doc.data() as IGroup;
        group.id = doc.id;
        setGroups([...groups, group]);
      });
    });
    return () => unsubscribe();
  }, [isUserActive]);
  return { groups };
};
