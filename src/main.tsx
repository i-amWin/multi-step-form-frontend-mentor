import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PersonalProfile from "./components/forms/personal-profile";
import SelectPlan from "./components/forms/select-plan";
import PickAddons from "./components/forms/pick-addons";
import FinishingUp from "./components/forms/finishing-up";
import ThankYou from "./components/forms/thankyou";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <PersonalProfile />,
      },
      {
        path: "/select-plan",
        element: <SelectPlan />,
      },
      {
        path: "/pick-addons",
        element: <PickAddons />,
      },
      {
        path: "/finishing-up",
        element: <FinishingUp />,
      },
      {
        path: "thankyou",
        element: <ThankYou />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
