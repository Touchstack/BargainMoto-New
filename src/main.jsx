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
import DealersGuide from "./pages/DealersGuide/DealerGuide.jsx";
import SearchPage from "./pages/SearchPage/SearchPage.jsx";
import SellersProfilePage from "./pages/SellersProfilePage/SellersProfilePage.jsx";
import { ContextProvider } from "./context/AppContext.jsx";
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
    path: "/car-details/:id",
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
  {
    path: "/dealersguide",
    element: <DealersGuide />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/vehicles/search/:text",
    element: <SearchPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/sellersprofile",
    element: <SellersProfilePage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
);
