import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Root = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  // React AOS
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="font-montserrat">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
