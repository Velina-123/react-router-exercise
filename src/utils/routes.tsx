import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import ProductList from "../pages/ProductList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <ProductList />,
      },
      {
        path: "products/:productId",
        element: <ProductDetails />,
      },
    ],
  },
]);
