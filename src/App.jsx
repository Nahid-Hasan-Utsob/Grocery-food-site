import React from "react";
import Home from "./Component/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Frurits from "./Component/Fruits/Frurits";
import Dairy from "./Component/Dairy and eggs/Dairy";
import Meat from "./Component/Mear and Seafood/Meat";
import AllProducts from "./Component/All Products/AllProducts";
import Layout from "./Component/Layout/Layout";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/frurits",
          element: <Frurits></Frurits>,
        },
        {
          path: "/dairy",
          element: <Dairy></Dairy>,
        },
        {
          path: "/meat",
          element: <Meat></Meat>,
        },
        {
          path: "/all_products",
          element: <AllProducts></AllProducts>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
