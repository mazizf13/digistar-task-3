import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { DarkModeProvider } from "./contexts/DarkModeContext";

ReactDOM.render(
  <DarkModeProvider>
    <App />
  </DarkModeProvider>,
  document.getElementById("root"),
);
