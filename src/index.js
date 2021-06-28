import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import Routes from "./Routes";
import "./theme.scss";
import theme from "./export.module.scss";
import "./services/firebase";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
