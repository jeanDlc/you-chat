import { FC } from "react";
import TextMessage from "../TextMessage";
import styled from "styled-components";

interface ChatBodyProps {}
const Body = styled.main`
  padding: 1rem;
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
  max-height: 100%;
`;
const Footer = styled.footer`
  padding: 1rem;
`;

const ChatBody: FC<ChatBodyProps> = ({}) => {
  const lorem =
    "Quisque commodo gravida tempor. Aliquam eu vulputate nulla. Aenean nulla dui, viverra ac quam sed, condimentum pretium nisl. Phasellus nisl nunc, vehicula eu elementum vulputate, maximus ac turpis. Donec eu ipsum nibh. Donec eu ante id mi aliquam ullamcorper at malesuada lectus. Praesent pellentesque pretium porttitor. Proin aliquet elit ac lacus vulputate imperdiet. Proin at mauris nec libero imperdiet tincidunt eu sed mi. Vestibulum pellentesque arcu et erat iaculis, sed elementum velit tristique. In elementum gravida auctor.";
  const messages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <Panel>
      <Body>
        {messages.map((e) => (
          <TextMessage message={lorem} mine={e % 2 === 0} key={e} />
        ))}
      </Body>
      <Footer>
        <input type="text" placeholder="Escribe algo..." />
      </Footer>
    </Panel>
  );
};

export default ChatBody;
