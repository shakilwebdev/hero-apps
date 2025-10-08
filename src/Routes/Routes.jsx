import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import MainLayout from "../Layouts/MainLayout";
import Apps from "../Pages/Apps";
import ErrorPage from "../Pages/ErrorPage";
import Installation from "../Pages/Installation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/apps",
        element: <Apps />,
      },
      {
        path: "/installation",
        element: <Installation />,
      },
    ],
  },
]);

export default router;
