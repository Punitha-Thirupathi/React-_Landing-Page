import React, { useState } from "react";
import "../Components/Navbar.css";
import logo from "../Assests/home-appliance.png";
import contactImg from "../Assests/telephone.png";
import { Link } from "react-scroll";
import menu from "../Assests/menubar.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />

      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="category"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          Category
        </Link>
        <Link
          activeClass="active"
          to="brand"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          Brands
        </Link>
        <Link
          activeClass="active"
          to="customer"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          Service
        </Link>
      </div>

      <button
        className="desktopMenuBtn"
        onClick={() => {
          document
            .getElementById("customer")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
       <img src={contactImg} alt="" className="desktopMenuImg" /> Contact
      </button>

      <img
        src={menu}
        alt="menu"
        className="mobMenu"
        onClick={() => setShowMenu(!showMenu)}
      />
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="category"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Category
        </Link>
        <Link
          activeClass="active"
          to="brand"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Brands
        </Link>
        <Link
          activeClass="active"
          to="customer"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Service
        </Link>
        <Link
          activeClass="active"
          to="customer"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
