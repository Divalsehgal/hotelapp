import React, { useState } from "react";
import logo from "../images/logo.svg";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
interface NavBarProps {}
const NavBar = ({}: NavBarProps) => {
  const [open, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!open);
  };

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="logo" />{" "}
          </Link>
          <button onClick={handleToggle} type="button" className="nav-btn">
            <FaAlignRight className="nav-icon" />
          </button>
        </div>
        <ul className={open ? "nav-links show-nav" : "nav-links"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/room">Room</Link>
          </li>
        </ul>{" "}
      </div>
    </nav>
  );
};

export default NavBar;
