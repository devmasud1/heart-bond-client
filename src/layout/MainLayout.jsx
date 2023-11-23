import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";
import { Container } from "@mui/material";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Container  maxWidth="xl">
      <Outlet />
      <Footer />
      </Container>
     
    </div>
  );
};
export default MainLayout;
