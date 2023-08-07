"use client"
import React, { useState } from "react";
import logo from "../public/images/logo.svg";
import { FaAlignRight } from "react-icons/fa";
import Image from 'next/image';
import Link from "next/link";

const NavBar = () => {
  const [open, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!open);
  };

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link href="/">
            <Image src={logo} alt="logo" />
          </Link>
          <button onClick={handleToggle} type="button" className="nav-btn">
            <FaAlignRight className="nav-icon" />
          </button>
        </div>
        <ul className={open ? "nav-links show-nav" : "nav-links"}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/rooms">Room</Link>
          </li>
        </ul>{" "}
      </div>
    </nav>
  );
};

export default NavBar;
