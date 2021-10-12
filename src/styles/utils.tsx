import styled from "styled-components";
import { myTheme } from "./my-theme";
const {
  colors: { purple },
} = myTheme;
export const ButtonBase = styled.button`
  padding: 1rem;
  text-transform: uppercase;
  width: 100%;
  font-weight: bold;
`;
export const ButtonMain = styled(ButtonBase)`
  background-color: ${purple};
  color: white;
  transition: background 0.2s ease-out;
  border: 1.5px solid transparent;
  &:hover {
    border: 1.5px solid ${purple};
    background-color: transparent;
    color: ${purple};
  }
`;
export const Container = styled.div`
  max-width: 100rem;
  width: 95%;
  margin: 0 auto;
`;
export const SmallContainer = styled.div`
  max-width: 35rem;
  width: 95%;
  margin: 0 auto;
`;
