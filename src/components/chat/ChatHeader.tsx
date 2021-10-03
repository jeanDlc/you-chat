import { FC } from "react";
import styled from "styled-components";
interface ChatHeaderProps {}
const Header = styled.header`
  padding: 0 0 0 1rem;
  box-shadow: -1px 8px 25px -11px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: -1px 8px 25px -11px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: -1px 8px 25px -11px rgba(0, 0, 0, 0.25);
  z-index: 1;
`;
const ChatHeader: FC<ChatHeaderProps> = () => {
  return (
    <Header>
      <h1>Elena Quintana</h1>
    </Header>
  );
};

export default ChatHeader;
