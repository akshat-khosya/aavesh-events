import "./navbar.css";
import React, { useState } from "react";
import Button from "../Button/Button";

function Navbar() {
  const [colorChange, setColorchange] = useState(false);
  const [hide, setHide] = useState(window.innerWidth < 800 ? true : false);
  function toogleNav() {
    if (window.innerWidth < 800) {
      setHide(!hide);
    }
  }
  const changeNavbarColor = () => {
    if (window.scrollY >= 150) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <div className={colorChange ? hide?"aavesh-nav fixed":"aavesh-nav navs fixed" :hide?"aavesh-nav ":"aavesh-nav navs" }>
      <nav className="navbar">
        <div className="nav-container">
          <a href="/" className="navbar-brand">
            A<span className="navbar-brand-a">a</span>ve
            <span className="navbar-brand-a">s</span>h
          </a>
          <div className="nav-hmburger">
            <a onClick={toogleNav}>
              <span class="navigation-button">
                <span class={hide?"navigation-icon":"navigation-icons"}>&nbsp;</span>
              </span>
            </a>
          </div>

          <div className={hide ? "nav-hide" : "nav-items"}>
            <ul className="navbar-ul">
              <li className="navbar-item">
                <a href="" className="navbar-link">
                  Home
                </a>
              </li>
              <li className="navbar-item">
                <a href="" className="navbar-link">
                  Events
                </a>
              </li>

              <li className="navbar-item">
                <a href="" className="navbar-link">
                  Schedule
                </a>
              </li>
              <li className="navbar-item">
                <a href="" className="navbar-link">
                  Rules
                </a>
              </li>
              {/*            optional   
              <li className="navbar-item">
                <a href="" className="navbar-link">
                  Team
                </a>
              </li> */}
              <li className="navbar-item">
                <a href="" className="navbar-link">
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="navbar-other">
              <Button text="Participate" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
