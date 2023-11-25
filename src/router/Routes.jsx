import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import BioData from "../pages/BioData/BioData";
import Login from "../pages/Authentication/Login";
import Signup from "../pages/Authentication/Signup";

const Routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/biodatas",
          element: <BioData />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
        
      ],
      
    },
   
  ]);

  export default Routes;