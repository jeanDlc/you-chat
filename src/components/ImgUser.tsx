import { FC } from "react";
import styled from "styled-components";
interface ImgUserProps {
  url?: string;
}
const ImgContainer = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  overflow: hidden;
  background-color: white;
  & img {
    max-width: 100%;
  }
`;

const ImgUser: FC<ImgUserProps> = ({ url }) => {
  const src =
    url ||
    "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png";
  return (
    <ImgContainer>
      <img src={src} alt="User image" />
    </ImgContainer>
  );
};

export default ImgUser;
