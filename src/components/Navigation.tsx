import { FC } from "react";
import { useStore } from "../hooks/useStore";
import ChatContainer from "./chat/ChatContainer";
import Login from "./Login";
interface NavigationProps {}

const Navigation: FC<NavigationProps> = () => {
  const { isUserActive } = useStore();
  return <div>{isUserActive ? <ChatContainer /> : <Login />}</div>;
};

export default Navigation;
