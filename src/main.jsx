/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import NiceModal from "@ebay/nice-modal-react";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
  
    < App />
  
    </BrowserRouter>
  </React.StrictMode>
);


/* <NiceModal.Provider>
    < App />
    </NiceModal.Provider>
    </BrowserRouter>*/