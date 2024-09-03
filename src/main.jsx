import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RecoilRoot } from "recoil";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <RecoilRoot>
    <StrictMode>
      <App />
    </StrictMode>
  </RecoilRoot>
);
