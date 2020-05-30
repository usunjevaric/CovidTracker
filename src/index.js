import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import ReactDOM from "react-dom";
import theme from "./theme";
import App from "./App";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
