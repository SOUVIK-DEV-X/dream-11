import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Fixture from "./pages/Fixture";
import Teams from "./pages/Teams";
import Schedules from "./pages/Schedules";
import MainLayout from "./layouts/MainLayout";
import ErrorPage from "./pages/error/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/fixture",
        element: <Fixture />,
      },
      {
        path: "/teams",
        element: <Teams />,
      },
      {
        path: "/schedules",
        element: <Schedules />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
