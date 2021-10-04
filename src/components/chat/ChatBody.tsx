import { FC } from "react";
import TextMessage from "../TextMessage";
import styled from "styled-components";
import { useMessages } from "../../hooks/useMessages";
import { useStore } from "../../hooks/useStore";

interface ChatBodyProps {}
const Body = styled.main`
  padding: 1rem;
  flex: 1;
  background-color: #f0efef;
  overflow: scroll;
  overflow-x: hidden;
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

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 100%;
`;
const Footer = styled.footer`
  padding: 1rem;
`;

const ChatBody: FC<ChatBodyProps> = ({}) => {
  const { messages } = useMessages("wjcJaSuMFbWMky01k17U");
  const { user } = useStore();

  return (
    <Panel>
      <Body>
        {messages.map((msg) => (
          <TextMessage
            message={msg.text}
            name={msg.name}
            mine={user.id === msg.idUser}
            timestamp={msg.timestamp}
            key={msg.idUser + msg.timestamp.toDate().getDate()}
          />
        ))}
      </Body>
      <Footer>
        <input type="text" placeholder="Escribe algo..." />
      </Footer>
    </Panel>
  );
};

export default ChatBody;
