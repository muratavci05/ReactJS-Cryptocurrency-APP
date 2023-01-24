import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CryptoContext from "./CryptoContext.jsx";
import "react-alice-carousel/lib/alice-carousel.css";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <CryptoContext>
      <App />
    </CryptoContext>
  </React.StrictMode>,
  document.getElementById("root")
);
