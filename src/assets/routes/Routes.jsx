import { createBrowserRouter } from "react-router";
import { Home } from "../../pages/Home";
import { Mainlayout } from "../../layouts/Mainlayout";
import { NoPage } from "../../pages/NoPage";
import { Children } from "react";
import { Coffee } from "../../pages/Coffee";
import { Dashboard } from "../../pages/Dashboard";



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
      
    ]
   
   },


      {
    path: "*",element: <NoPage />,
    
   },


]);

export default routes;