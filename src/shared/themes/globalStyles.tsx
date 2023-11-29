import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body {
    max-width: 100%;
    font-family: "Inter", sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  
  a:hover {
    color: #335b8e;
  }
`;
