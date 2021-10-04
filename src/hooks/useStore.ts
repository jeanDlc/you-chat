import { useContext } from "react";
import { context } from "../store";
export const useStore = () => {
  const {
    setUser,
    state: { user, isUserActive, currentChatId },
  } = useContext(context);
  return {
    setUser,
    user,
    isUserActive,
    currentChatId,
  };
};
