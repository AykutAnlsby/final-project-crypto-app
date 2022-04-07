import { createGlobalStyle } from "styled-components";

export const theme = {
  //for the menu links and stuff
  accentColor: "#FFEF00",

  hoverAccentColor: "#C64500",

  //hoverAccentColor: "#ff9900",//
  //hoverAccentColor: "#FF9900",//

  fontColor: "#323232",
  headingFont: "Dela Gothic One, sans-serif",
  contentFont: "Lato, sans-serif",
};

export default createGlobalStyle`
  *,
  *:before,
  *:after {
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      scroll-behavior: smooth;
  }
  body {
  margin: 0 auto;
  }
  
  
html, body, div,
input, button, select, option, p,
text, a {
    font-family: ${theme.contentFont};
    line-height: 2;
    font-weight: 500;
}
h1, h2, h3, h4, h5, h6 {
  font-family: ${theme.headingFont};
  text-transform: uppercase;
}
ul {
  list-style: none;
  padding: 0;
}
h2, h3, h4 {
  font-weight: 700;
}
a {
  text-decoration: none;
  &:visited {
    text-decoration: none;
  }
}
.accentBtn {
  border-radius: 5px;
  background-color: #FFCE00;
  color: black;
  border: none;
  padding: 8px 15px;
  font-family: ${theme.contentFont};
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  
  &:hover {
    background-color: #FFF200;
  }
  @media screen and (min-width: 900px) {
    &:active {
    animation: scaleIn 0.3s ease-in-out forwards;
  }
  }
}
@keyframes scaleIn {
  from {
    transform: scale(0.8)
  }
  to {
    transform: scale(1);
  }
}
  `;
