import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const GlobalStyle = createGlobalStyle`
  ${normalize}
  body {
    color: ${(props) => (props.whiteTheme ? "white" : "black")};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle whiteTheme />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
