import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./page/HomePage/HomePage.jsx";
import ErrorPage from "./page/ErrorPage/ErrorPage.jsx";
import AboutPage from "./page/AboutPage/AboutPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  { path: "/", element: <HomePage />, errorElement: <ErrorPage /> },
  { path: "/aboutus", element: <AboutPage />, errorElement: <ErrorPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
