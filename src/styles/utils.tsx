import styled from "styled-components";
import { myTheme } from "./my-theme";
const {
  colors: { purple, pDark, pLight },
} = myTheme;
export const Button = styled.button`
  background-color: ${purple};
  color: white;
  font-size: 0.9rem;
  text-transform: uppercase;
  font-weight: 600;
  padding: 0.8rem 1.2rem;
  border: none;
  text-align: center;
  cursor: pointer;
  border-radius: 0.2rem;
  transition: background 0.2s ease-out;
  &:hover {
    background-color: ${pLight};
  }
`;
export const Container = styled.div`
  max-width: 100rem;
  width: 95%;
  margin: 0 auto;
`;
