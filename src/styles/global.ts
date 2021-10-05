import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
  body {
    background-color:white;
    margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #212121;
  }
  input[type=text]{
    padding: .7rem 1rem;
    border-radius: 0.5rem;
    appearance: none;
    border:none;
    font-size: 1.2rem;
    width: 100%;
    box-shadow:  0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06)!important;
  }
  img{
    max-width: 100%;
  }
 
  input:focus{
    outline: none;
  }
  button{
    border: none;
    cursor: pointer;
    
  }
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
