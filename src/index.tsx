import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.component";
import { RtkProvider } from "./redux/store";

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RtkProvider>
      <App />
    </RtkProvider>
  </React.StrictMode>
);
