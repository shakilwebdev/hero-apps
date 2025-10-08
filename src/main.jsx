import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// router
import { RouterProvider } from "react-router/dom";
import router from "./Routes/Routes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />,
  </StrictMode>
);
