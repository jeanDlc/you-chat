import { Timestamp } from "@firebase/firestore";
import { FC } from "react";
import styled from "styled-components";
interface TextMessageProps {
  message: string;
  mine?: boolean;
  name: string;
  timestamp: Timestamp;
}
const Footer = styled.footer`
  color: #7e7e7e;
  font-size: 0.7rem;
  margin: 0;
`;
const Name = styled.h3`
  color: #181818;
  font-size: 1rem;
  margin: 0;
`;
const Text = styled.p`
  font-size: 1rem;
  margin: 0.5rem 0;
`;
const TextMessage: FC<TextMessageProps> = ({
  message,
  mine = false,
  name,
  timestamp,
}) => {
  const MsgContainer = styled.div`
    display: flex;

    justify-content: ${mine ? "flex-end" : "flex-start"};
  `;
  const Body = styled.section`
    padding: 1rem;
    background-color: ${mine ? "#f6f6f6" : "white"};
    margin: 1rem;
    min-width: 30%;
    max-width: 70%;
    font-size: 1rem;
    border-radius: ${mine ? "1rem 0 1rem 1rem" : "0 1rem 1rem 1rem"};
    box-shadow: 0px 8px 26px -1px rgba(0, 0, 0, 0.17);
    -webkit-box-shadow: 0px 8px 26px -1px rgba(0, 0, 0, 0.17);
    -moz-box-shadow: 0px 8px 26px -1px rgba(0, 0, 0, 0.17);
  `;

  return (
    <MsgContainer>
      <Body>
        <Name> {name} </Name>
        <Text>{message}</Text>
        <Footer>{timestamp.toDate().toLocaleDateString()} </Footer>
      </Body>
    </MsgContainer>
  );
};

export default TextMessage;
