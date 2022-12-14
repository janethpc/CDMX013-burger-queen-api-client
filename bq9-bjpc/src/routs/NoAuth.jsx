import {
    createBrowserRouter
  } from "react-router-dom";
import { Login } from "../components/Login";



export const RouterNoAuth = createBrowserRouter([
    {
      path: "/LogAuth",
      element: <Login/>,
    },
  ]);