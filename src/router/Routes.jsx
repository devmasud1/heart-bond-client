import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import BioData from "../pages/BioData/BioData";

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
        
      ],
    },
  ]);

  export default Routes;