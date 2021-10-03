import { FC } from "react";
import styled from "styled-components";
import { myTheme } from "../styles/my-theme";
const {
  colors: { purple },
} = myTheme;
interface HeaderProps {}
const HeaderContainer = styled.header`
  background-color: ${purple};
  color: white;
  width: 100%;
  padding: 1rem;
`;

const Header: FC<HeaderProps> = ({ children }) => {
  return <HeaderContainer>{children}</HeaderContainer>;
};

export default Header;
