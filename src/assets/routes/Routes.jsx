import { createBrowserRouter, Navigate } from "react-router";
import { Home } from "../../pages/Home";
import { Mainlayout } from "../../layouts/Mainlayout";
import { NoPage } from "../../pages/NoPage";
import { Children } from "react";
import { Coffee } from "../../pages/Coffee";
import { Dashboard } from "../../pages/Dashboard";
import Template from "../../pages/Template";
import Practice from "../../pages/Practice";
import One from "../../pages/One";




const routes = createBrowserRouter([
  {
    path: "/", element: <Mainlayout />,

    children :[
   {
    path: "/", element: <Home />,
   
   },
   {
    path: "/coffee", element: <Coffee />,
   
   },
      {
    path: "/dashboard", element: <Dashboard />,
   
   },
   {
    path: "/template1", element: <Template />,
   },{
    path: "/practice", element: <Practice />,
   },{
    path: "/one", element: <One />,
   }



      
    ]
   
   },

   


  {
    path: "*",
    element: <Navigate to="/coffee"  />,
  },


]);

export default routes;