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
          idChat={chat.id}
          type="private"
          key={chat.id}
          name={chat.members[1]}
          lastMessage={chat.lastMessage}
          timestamp={chat.timestamp}
        />
      ))}
      {groups.map((group) => (
        <ChatCard
          idChat={group.id}
          type="group"
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
