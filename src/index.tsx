import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.component";
import { RtkProvider } from "./redux/store";

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <RtkProvider>
        <App />
      </RtkProvider>
    </BrowserRouter>
  </React.StrictMode>
);
