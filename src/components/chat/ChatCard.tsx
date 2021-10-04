import { Timestamp } from "@firebase/firestore";
import { FC, useEffect } from "react";
import styled from "styled-components";
import { myTheme } from "../../styles/my-theme";
import ImgUser from "../ImgUser";
import { TypeChat } from "../../types";
import { useStore } from "../../hooks/useStore";
const {
  colors: { gray2 },
} = myTheme;

interface ChatCardProps {
  type: TypeChat;
  name: string;
  lastMessage: string;
  timestamp: Timestamp;
  idChat: string;
}
interface CardStyledProps {
  active: boolean;
}
const Card = styled.section<CardStyledProps>`
  background-color: ${(props) =>
    props.active ? "rgba(0, 0, 0, 0.05)" : "white"};
  padding: 1rem;
  color: ${gray2};
  cursor: pointer;
  display: flex;
  gap: 1rem;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
`;
const NameUser = styled.h3`
  margin: 0 0 0.2rem 0;
  font-weight: bold;
`;
const Conversation = styled.p`
  margin: 0 0 0.4rem 0;
  font-size: 1.1rem;
`;
const Time = styled.p`
  margin: 0;
  opacity: 0.7;
  font-size: 0.7rem;
`;

const ChatCard: FC<ChatCardProps> = ({
  lastMessage,
  name,
  timestamp,
  type,
  idChat,
}) => {
  const date = timestamp.toDate().toLocaleDateString();
  const { setCurrentChat, currentChat } = useStore();

  return (
    <Card
      active={currentChat.id === idChat}
      onClick={() => setCurrentChat({ id: idChat, type, name })}
    >
      <ImgUser />
      <div>
        <NameUser> {name} </NameUser>
        <Conversation>{lastMessage} </Conversation>
        <Time>{date}</Time>
      </div>
    </Card>
  );
};

export default ChatCard;
