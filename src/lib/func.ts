import { doc, setDoc, Timestamp, addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { IGroup } from "../types";
export const createNewGroup = async (
  name: string,
  category: string,
  members: string[]
) => {
  const newGroup: IGroup = {
    name,
    category,
    members,
    lastMessage: "** NUEVO GRUPO **",
    timestamp: Timestamp.fromDate(new Date()),
    id: "",
  };

  const docGroupRef = await addDoc(collection(db, "group"), newGroup);
  // each doc of messages are related to one group or chat
  await setDoc(doc(db, "messages", docGroupRef.id), {
    messages: [],
  });
};
