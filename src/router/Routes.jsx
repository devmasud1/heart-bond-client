import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import BioData from "../pages/BioData/BioData";
import Login from "../pages/Authentication/Login";
import Signup from "../pages/Authentication/Signup";
import BioDataDetails from "../pages/BioDataDetails/BioDataDetails";
import PremiumMemberDetails from "../pages/Home/PremiumMemberDetails";

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
          path: "/biodata/:id",
          element: <BioDataDetails />,
          loader: ({ params }) => fetch(`http://localhost:5000/biodata/${params.id}`)
        },
        {
          path: "/premium-member/:id",
          element: <PremiumMemberDetails />,
          loader: ({ params }) => fetch(`http://localhost:5000/premium-bioData/${params.id}`)
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