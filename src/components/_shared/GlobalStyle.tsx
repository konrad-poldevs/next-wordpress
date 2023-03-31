import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  a {
    color: #000;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
    background: transparent;
    border: none;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  input[type="text"], input[type="password"] {
    width: 100%;
    background-color: transparent;
  }  
`;

export default GlobalStyle;
