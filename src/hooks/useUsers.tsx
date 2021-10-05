import { useState, useEffect } from "react";
import { IUser } from "../types";
import { db } from "../firebase";
import { collection, query, getDocs } from "firebase/firestore";

export const useUsers = () => {
  const q = query(collection(db, "users"));
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      const querySnapshot = await getDocs(q);
      const listUsers: IUser[] = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        const u = doc.data() as IUser;
        u.id = doc.id;
        listUsers.push(u);
      });
      setUsers(listUsers);
    };
    getUsers();
  }, []);

  return { users };
};
