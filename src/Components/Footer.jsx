import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="py-10 px-4 md:px-0 pb-0 text-base-content bg-[#ebebeb]">
      <div className="max-w-7xl w-[95%] md:w-[93%] mx-auto">
        <div className="footer">
          <aside className="flex md:w-auto items-center gap-3">
            <img src={logo} className="w-[70px] md:w-24" alt="" />
            <div>
              <h3 className="text-lg md:text-2xl font-bold">ArtFusion.</h3>
            </div>
          </aside>

          <nav>
            <h6 className="footer-title text-lg text-black ">Services</h6>
            <a className="link link-hover">Customer Support</a>
            <a className="link link-hover">Shipping and Returns</a>
            <a className="link link-hover">Gift Cards</a>
          </nav>
          <nav>
            <h6 className="footer-title text-lg text-black">Company</h6>
            <a className="link link-hover">About us</a>
            <Link to={"/contact"} className="link link-hover">
              Contact
            </Link>
            <a className="link link-hover">Jobs</a>
          </nav>
          <nav>
            <h6 className="footer-title text-lg text-black ">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </div>

        <hr className="mt-10 mb-5 border-[#cacaca]" />
        <aside className="footer-center pb-5  text-sm font-medium text-gray-600">
          <p>Copyright © 2024 | All right reserved by ArtFusion Properties.</p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
