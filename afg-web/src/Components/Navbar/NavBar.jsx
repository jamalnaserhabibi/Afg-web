import React, { useState } from "react";
import "../Navbar/navBar.css";
import { SiYourtraveldottv } from "react-icons/si";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
const Navbar = () => {
  const [active, setActive] = useState("navBar");
  const showNav = () => {
    setActive("navBar activeNavbar");
  };
  const removeNavBar = () => {
    setActive("navBar");
  };
  return (
    <section className="navBarSection">
      <div className="header">
        <div className="logoDiv">
          <a href="#" className="logo">
            <h1 className="flex">
              <SiYourtraveldottv className="icon" />
              |AFG
            </h1>
          </a>
        </div>
        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">
                Home
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                History
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                City
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Picture
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Info
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Contact
              </a>
            </li>
            <div className="headerBtn flex">
              <button className="btn loginBtn">
                <a href="#" className="login">
                  Login
                </a>
              </button>
              <button className="btn">
                <a href="#" className="login">
                  Sign Up
                </a>
              </button>
            </div>
          </ul>
          <div onClick={removeNavBar} className="closeNavBar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>
        <div onClick={showNav} className="toggleNavBar">
          <TbGridDots className="icon" />
        </div>
      </div>
    </section>
  );
};
export default Navbar;
