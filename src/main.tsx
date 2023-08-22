import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login } from "./pages/login/login.page";
import { Main } from "./pages/main.page";
import { About } from "./pages/about.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "main",
    element: <Main />,
  },
  {
    path: "about",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
