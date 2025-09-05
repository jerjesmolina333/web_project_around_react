import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App";
import EditAvatar from "../form/EditAvatar/EditAvatar";

// export default function main() {
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
//}
