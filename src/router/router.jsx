import { createBrowserRouter } from "react-router-dom";
import Layout from "@pages/Layout/Layout";
import HomePage from "@pages/HomePage/HomePage";
import AuthPage from "@pages/AuthPage/AuthPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "login",
        element: <AuthPage />,
      },
    ],
  },
]);
