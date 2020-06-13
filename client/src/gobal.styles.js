import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
body{
    font-family: 'Fira Sans Condensed', sans-serif;
    padding: 20px 60px;
    @media screen and (max-width:500px ){
        padding:50px;
    }
  
}
a{
    text-decoration: none;
    color: black;
}
*{
    box-sizing: border-box;
}

`;
