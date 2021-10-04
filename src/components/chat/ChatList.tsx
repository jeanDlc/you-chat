import { FC } from "react";
import ChatCard from "./ChatCard";
import styled from "styled-components";

import { useChats } from "../../hooks/useChats";
import { useGroups } from "../../hooks/useGroups";
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
  //const [chats, setChats] = useState<IChat[]>([]);
  const { chats } = useChats();
  const { groups } = useGroups();

  return (
    <List>
      {chats.map((chat) => (
        <ChatCard
          key={chat.id}
          name={chat.members[1]}
          lastMessage={chat.lastMessage}
          timestamp={chat.timestamp}
        />
      ))}
      {groups.map((group) => (
        <ChatCard
          key={group.id}
          name={group.name}
          lastMessage={group.lastMessage}
          timestamp={group.timestamp}
        />
      ))}
    </List>
  );
};

export default ChatList;
