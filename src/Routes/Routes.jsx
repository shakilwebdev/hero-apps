import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import MainLayout from "../Layouts/MainLayout";
import Apps from "../Pages/Apps";
import ErrorPage from "../Pages/ErrorPage";
import Installation from "../Pages/Installation";
import AppsDetails from "../Pages/AppsDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <p className="text-center mt-96">Loading...</p>,
    children: [
      {
        index: true,
        Component: Home,
        // loader: () => fetch("./appsData.json"),
      },
      {
        path: "/apps",
        element: <Apps />,
      },
      {
        path: "/installation",
        element: <Installation />,
      },
      {
        path: "/app/:id",
        element: <AppsDetails />,
      },
    ],
  },
]);

export default router;
