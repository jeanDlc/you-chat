import { FC } from "react";
import styled from "styled-components";
import { myTheme } from "../../styles/my-theme";
import ImgUser from "../ImgUser";
const {
  colors: { gray2 },
} = myTheme;
interface ChatCardProps {}
const Card = styled.section`
  padding: 1rem;
  background-color: white;
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
const ChatCard: FC<ChatCardProps> = () => {
  return (
    <Card>
      <ImgUser />
      <div>
        <NameUser>Pepe Luna</NameUser>
        <Conversation>Y de eso te estaba hablando...</Conversation>
        <Time>7 de junio de 2019</Time>
      </div>
    </Card>
  );
};

export default ChatCard;
