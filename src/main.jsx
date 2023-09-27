import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/HomePage/HomePage.jsx";
import SellACarPage from "./pages/SellACarPage/SellACarPage.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";
import AboutPage from "./pages/AboutPage/AboutPage.jsx";
import BuyACarPage from "./pages/BuyACarPage/BuyACarPage.jsx";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage.jsx";
import VehicleDetailsPage from "./pages/VehicleDetailsPage/VehicleDetailsPage.jsx";
import TermsOfUse from "./pages/TermsOfUse/PrivacyPolicy.jsx";
import PrivacyPolicy from "./pages/TermsOfUse/TermsOfUse.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

const router = createBrowserRouter([
  { path: "/", element: <HomePage />, errorElement: <ErrorPage /> },
  { path: "/aboutus", element: <AboutPage />, errorElement: <ErrorPage /> },
  {
    path: "/sellacar",
    element: <SellACarPage />,
    errorElement: <SellACarPage />,
  },
  {
    path: "/buyacar",
    element: <BuyACarPage />,
    errorElement: <BuyACarPage />,
  },
  {
    path: "/contactus",
    element: <ContactUsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/vehicledetails",
    element: <VehicleDetailsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/termsofuse",
    element: <TermsOfUse />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/privacypolicy",
    element: <PrivacyPolicy />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
