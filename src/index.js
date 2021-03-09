import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { ThemeProvider } from "styled-components";
import { darkTheme, defaultTheme } from "./utils/theme";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import cursorImg from "./assets/cursor/pickle-rick-cursor.png";
import BgImg from "./assets/img/bg.png";

const GlobalStyle = createGlobalStyle`
  ${normalize}
  :root {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.2;
    color: ${(p) => p.theme.textColor};
    background: ${(p) => p.theme.pageBackground};
    //background-attachment: fixed;
    //background-color: #fff;
    //background-image: url(${BgImg});
    //background-repeat: no-repeat;
    //background-size: cover;
    cursor: url(${cursorImg}), default !important;
    
  }

    body {
      //min-height: 100vh;
      
      //background: ${(p) => p.theme.pageBackground};
      
      //background: linear-gradient(180deg,#5095e4 20%,#5095e4 60%,#2f6ed3 95%);
    }
    
    ::before,
    ::after {
      box-sizing: inherit;
    }
  
`;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
