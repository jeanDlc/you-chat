import { useContext } from "react";
import { context } from "../store";
export const useStore = () => {
  const {
    setUser,
    setCurrentChat,
    logUser,
    state: { user, isUserActive, currentChat },
  } = useContext(context);
  return {
    setUser,
    user,
    isUserActive,
    currentChat,
    setCurrentChat,
    logUser,
  };
};
