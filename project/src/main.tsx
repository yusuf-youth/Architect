import { createRoot } from "react-dom/client";
import "../public/styles/main.scss";
import App from "./App";
import { HashRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <App />
  </HashRouter>
);
