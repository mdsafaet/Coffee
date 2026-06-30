import { createBrowserRouter, Navigate } from "react-router";
import { Home } from "../../pages/Home";
import { Mainlayout } from "../../layouts/Mainlayout";

import { Children } from "react";



import BooksDetails from "../../components/BooksDetails";
import ListedBooks from "../../components/ListedBooks";
import NoPage from "../../pages/NoPage";





const routes = createBrowserRouter([
  {
    path: "/", element: <Mainlayout />,

    children :[
   {
    path: "/", element: <Home />,
   
   },
   {
    path: "/books/:bookId", element: <BooksDetails />,

   },
   {
    path: "/listedbooks", element: <ListedBooks />,
   
   },
      {
    path: "/dashboard", element: <Dashboard />,
   
   },
    {
    
    },

    {
        path: "/no-page", element: <NoPage />,
    },

    {
      path: "*", element: <Navigate to="/no-page" />
    }



      
    ]
   
   },

   


  



]);

export default routes;