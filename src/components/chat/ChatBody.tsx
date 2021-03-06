import { FC, FormEventHandler, useState, useEffect, useRef } from "react";
import TextMessage from "../TextMessage";
import styled from "styled-components";
import { useMessages } from "../../hooks/useMessages";

import { useStore } from "../../hooks/useStore";
import { Timestamp } from "@firebase/firestore";

interface ChatBodyProps {}
const Body = styled.main`
  padding: 1rem;
  flex: 1;
  background-color: #f0efef;
  overflow: scroll;
  overflow-x: hidden;
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
  const { user, currentChat } = useStore();
  const { messages, sendNewMessage } = useMessages(currentChat.id);
  const [text, setText] = useState<string>("");
  const body = useRef<HTMLElement>(null);

  function scrollDown() {
    if (body.current) {
      body.current.scrollTop = body.current.scrollHeight;
    }
  }

  useEffect(() => {
    scrollDown();
  }, [messages]);
  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    sendNewMessage(
      {
        idUser: user.id,
        name: user.nickName,
        text,
        timestamp: Timestamp.fromDate(new Date()),
      },
      currentChat.id
    );
    setText("");
  };
  return (
    <Panel>
      <Body ref={body}>
        {messages.map((msg) => (
          <TextMessage
            message={msg.text}
            name={msg.name}
            mine={user.id === msg.idUser}
            timestamp={msg.timestamp}
            key={msg.idUser + msg.timestamp.toDate().getTime()}
          />
        ))}
      </Body>
      <Footer>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setText(e.target.value)}
            value={text}
            type="text"
            placeholder="Escribe algo..."
          />
        </form>
      </Footer>
    </Panel>
  );
};

export default ChatBody;
