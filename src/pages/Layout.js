import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Outlet className="pb-10"/>
      <Footer />
    </div>
  );
};
export default Layout;
