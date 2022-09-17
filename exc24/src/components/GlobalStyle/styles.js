import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body{
    background-color: ${({theme})=> theme.colors.background};
    transition: all 0.2s;
  }
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Press Start 2P', cursive;
    outline: none;
  }
`