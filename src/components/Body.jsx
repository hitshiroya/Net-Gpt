import React from "react";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import Header from "./Header";

const Body = () => {
    let router = createBrowserRouter([
        {
            path:"/",
            Component : Login
        },
        {
            path:"/browse",
            Component : Browse
        }
    ]);
  return (
    <div>
        <RouterProvider router={router}/>
    </div>
      
      
    
  );
};

export default Body;
