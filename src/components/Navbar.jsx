import React from "react";
import logo from "../assets/Profile/name_logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="white-logo" color="blue" />
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/abhay-gohil-4a80121b1/"
          target="Linkedin"
          rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Abhay0324" target="Git Hub">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/ll_abhay_gohil_ll?utm_source=qr&igsh=Z3k4Mno0Mm5ldGoy" target="Instagram">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
