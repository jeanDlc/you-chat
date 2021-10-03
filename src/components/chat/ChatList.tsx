import { FC } from "react";
import ChatCard from "./ChatCard";
import styled from "styled-components";

const List = styled.div`
  /* ... */
  max-height: 100%;
  overflow: scroll;
  overflow-x: unset;
  &::-webkit-scrollbar {
    width: 0.4rem;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background-color: #929292;
    outline: 1px solid #cecece;
    border-radius: 2rem;
  }
`;
interface ChatListProps {}

const ChatList: FC<ChatListProps> = () => {
  return (
    <List>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((e) => (
        <ChatCard key={e} />
      ))}
    </List>
  );
};

export default ChatList;
