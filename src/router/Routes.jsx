import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import BioData from "../pages/BioData/BioData";
import Login from "../pages/Authentication/Login";
import Signup from "../pages/Authentication/Signup";
import BioDataDetails from "../pages/BioDataDetails/BioDataDetails";
import PremiumMemberDetails from "../pages/Home/PremiumMemberDetails";
import PrivateRoutes from "./PrivateRoutes";
import Checkout from "../pages/Checkout/Checkout";
import DashboardLayout from "../layout/DashBoardLayout";
import EditBioData from "../pages/Dashboard/User/EditBiodata";
import ViewBioData from "../pages/Dashboard/User/ViewBioData";
import MyContactRequest from "../pages/Dashboard/User/MyContactRequest";
import FavoritesBioData from "../pages/Dashboard/User/FavoritesBioData";
import ApproveContactRequest from "../pages/Dashboard/Admin/ApproveContactRequest";
import ApprovedPremium from "../pages/Dashboard/Admin/ApprovedPremium";
import ManageUser from "../pages/Dashboard/Admin/ManageUser";
import AdminDashboard from "../pages/Dashboard/Admin/AdminDashboard";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AdminRoutes from "./AdminRoutes";
import Dashboard from "../pages/Dashboard/Dashboard";
import ContactUs from "./../pages/ContactUs/ContactUs";
import AboutUs from "./../pages/AboutUs/AboutUs";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
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
        element: (
          <PrivateRoutes>
            <BioDataDetails />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/biodata/${params.id}`),
      },
      {
        path: "/checkout/:biodataId",
        element: (
          <PrivateRoutes>
            <Checkout />
          </PrivateRoutes>
        ),
      },
      {
        path: "/premium-member/:id",
        element: <PremiumMemberDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/premium-bioData/${params.id}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
    ],
  },

  //dashboard routes
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout />
      </PrivateRoutes>
    ),
    children: [
      //normal user
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "edit-biodata",
        element: <EditBioData />,
      },
      {
        path: "view-biodata",
        element: <ViewBioData />,
      },
      {
        path: "contact-request",
        element: <MyContactRequest />,
      },
      {
        path: "favorite-biodata",
        element: <FavoritesBioData />,
      },

      //admin

      {
        path: "/dashboard/admin",
        element: (
          <AdminRoutes>
            <AdminDashboard />
          </AdminRoutes>
        ),
      },
      {
        path: "manage-users",
        element: (
          <AdminRoutes>
            <ManageUser />
          </AdminRoutes>
        ),
      },
      {
        path: "approved-premium",
        element: (
          <AdminRoutes>
            <ApprovedPremium />
          </AdminRoutes>
        ),
      },
      {
        path: "approved-request",
        element: (
          <AdminRoutes>
            <ApproveContactRequest />
          </AdminRoutes>
        ),
      },
    ],
  },
]);

export default Routes;
