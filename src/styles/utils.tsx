import styled from "styled-components";
import { myTheme } from "./my-theme";
const {
  colors: { purple, pDark, pLight },
} = myTheme;
export const ButtonBase = styled.button`
  padding: 1rem;
  text-transform: uppercase;
  width: 100%;
  font-weight: bold;
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
