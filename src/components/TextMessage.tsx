import { FC } from "react";
import styled from "styled-components";
interface TextMessageProps {
  message: string;
  mine?: boolean;
}

const TextMessage: FC<TextMessageProps> = ({ message, mine = false }) => {
  const MsgContainer = styled.div`
    display: flex;

    justify-content: ${mine ? "flex-end" : "flex-start"};
  `;
  const Msg = styled.div`
    padding: 1rem;
    background-color: white;
    margin: 1rem;
    max-width: 70%;
    font-size: 1rem;
    border-radius: ${mine ? "1rem 0 1rem 1rem" : "0 1rem 1rem 1rem"};
    box-shadow: 0px 8px 26px -1px rgba(0, 0, 0, 0.17);
    -webkit-box-shadow: 0px 8px 26px -1px rgba(0, 0, 0, 0.17);
    -moz-box-shadow: 0px 8px 26px -1px rgba(0, 0, 0, 0.17);
  `;

  return (
    <MsgContainer>
      <Msg>{message}</Msg>
    </MsgContainer>
  );
};

export default TextMessage;
