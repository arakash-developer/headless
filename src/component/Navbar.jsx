import React from "react"; // Assuming you have a CSS file for styling
import { Link } from "react-router-dom";
import Logo from "../../public/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar py-[38px] px-[33px] flex justify-between items-center">
      <Link to="/" className="flex-shrink-0">
        <img src={Logo} alt="f" />
      </Link>
      <p className="text-[#000] text-base not-italic font-normal leading-6">Already have an account? <span className="text-[#ED272C] text-base not-italic font-medium leading-6">Log In</span></p>
    </nav>
  );
};

export default Navbar;
