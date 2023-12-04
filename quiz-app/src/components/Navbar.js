import React from "react";
import "./navbar.css";
import Logo from "../images/logo.png";
import { FaUserCircle , FaAngleDown , FaSearch , MdOutlineDarkMode  } from "react-icons/fa";
import { FiMaximize2 } from "react-icons/fi";
import { MdModeNight } from "react-icons/md";
const Navbar = () => {
  
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <img src={Logo} height={60} width={150}/>
        </div>

        {/* 2nd menu part  */}
          <ul className="list">
            <li>
              <p>Home</p>
            </li>
            <li className="oneline">
              <p>Product</p>
              <FaAngleDown className="icon"/>
            </li>
            <li className="oneline">
              <p>Pricing</p>
              <FaAngleDown className="icon"/>
            </li>
            <li className="oneline">
              <p>Free Trial</p>
              <FaAngleDown className="icon"/>
            </li>
            <li className="oneline">
              <p>More</p>
              <FaAngleDown className="icon"/>
            </li>
            <li className="oneline">
              <p>Sonali</p>
              <FaUserCircle className="user"/>
              <FaAngleDown className="icon"/>
            </li>
            <li>
              <FaSearch className="icon2"/>
            </li>
            <li>
              <p className="divider">|</p>
            </li>
            <li>
              <MdModeNight className="icon2"/>
            </li>
            <li>
              <FiMaximize2  className="icon2"/>
            </li>

          </ul>

      </nav>
    </>
  );
};

export default Navbar;