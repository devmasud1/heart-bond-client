import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
// import { Container } from "@mui/material";
import NavBar from "../pages/Shared/Navbar";


const MainLayout = () => {
  return (
    <div>
      <NavBar />
     
        <Outlet />
        <Footer />
    
    </div>
  );
};
export default MainLayout;
