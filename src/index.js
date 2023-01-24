import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CryptoContext from "./CryptoContext.jsx";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <CryptoContext>
      <App />
    </CryptoContext>
  </React.StrictMode>,
  document.getElementById("root")
);
