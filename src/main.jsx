import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Routes from "./router/Routes.jsx";
import Theme from "./utilis/Theme.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Theme>
      <RouterProvider router={Routes} />
    </Theme>
  </React.StrictMode>
);
