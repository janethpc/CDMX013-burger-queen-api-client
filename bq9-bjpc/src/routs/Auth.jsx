import {
    createBrowserRouter
  } from "react-router-dom";
import { Dashboard } from "../components/mesero/Dashboard";
import { MeseroAllOrder } from "../components/mesero/MeseroAllOrder/MeseroAllOrderds";
import { MeseroNewOrder } from "../components/mesero/MeseroNewOrder/MeseroNewOrder";



export const RouterAuth = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard/>,
      children: [
        {
            path: "/NewOrder",
            element: <MeseroNewOrder />,
          },{
            path: "/AllOrder",
            element: <MeseroAllOrder />,
          }
      ],
    },
  ]);