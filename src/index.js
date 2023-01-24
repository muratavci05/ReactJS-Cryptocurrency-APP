import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CryptoContext from "./CryptoContext.jsx";

ReactDOM.render(
  <React.StrictMode>
    <CryptoContext>
      <App />
    </CryptoContext>
  </React.StrictMode>,
  document.getElementById("root")
);
