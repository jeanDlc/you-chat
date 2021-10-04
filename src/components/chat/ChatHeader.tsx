import { FC } from "react";
import styled from "styled-components";
import { useStore } from "../../hooks/useStore";
interface ChatHeaderProps {}
const Header = styled.header`
  padding: 0 0 0 1rem;
  text-transform: capitalize;
  box-shadow: -1px 8px 25px -11px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: -1px 8px 25px -11px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: -1px 8px 25px -11px rgba(0, 0, 0, 0.25);
  z-index: 1;
`;
const ChatHeader: FC<ChatHeaderProps> = () => {
  const { currentChat } = useStore();
  return (
    <Header>
      <h1> {currentChat.name} </h1>
    </Header>
  );
};

export default ChatHeader;
