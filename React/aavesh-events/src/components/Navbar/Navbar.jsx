import "./navbar.css";
import React, { useState } from "react";
import Button from "../Button/Button";
import eventlogo from '../../Images/eventb.png'
import iitu from '../../Images/iiitu.gif'
import aavesh from '../../Images/logoaavesh.jpeg'

function Navbar() {
  const [colorChange, setColorchange] = useState(false);
  const [hide, setHide] = useState(window.innerWidth < 900 ? true : false);
  function toogleNav() {
    if (window.innerWidth < 900) {
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
          {/* <a href="/" className="navbar-brand">
            A<span className="navbar-brand-a">a</span>ve
            <span className="navbar-brand-a">s</span>h
          </a> */}
          <div className="logo-group">
          <a href="https://iiitu.ac.in/"  className="navbar-brand">
           <img src={eventlogo} alt="" className="iiitu" />
          </a>
          
          </div>
          <div className="logo-group">
          <a href="https://iiitu.ac.in/"  className="navbar-brand">
           <img src={iitu} alt="" className="aaveshiit" />
          </a>
          
          </div>
          <div className="logo-group">
          <a href="/" className="navbar-brand">
           <img src={aavesh} alt="" className="aavesh" />
          </a>
          </div>
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
                <a href="/" className="navbar-link">
                  Home
                </a>
              </li>
              <li className="navbar-item">
                <a href="" className="navbar-link">
                  About
                </a>
              </li>
              <li className="navbar-item">
                <a href="" className="navbar-link">
                  Events
                </a>
              </li>

              {/* <li className="navbar-item">
                <a href="" className="navbar-link">
                  Schedule
                </a>
              </li> */}
             
                        
              <li className="navbar-item">
                <a href="/team" className="navbar-link">
                  Team
                </a>
              </li>
              <li className="navbar-item">
                <a href="/contactus" className="navbar-link">
                  Contact
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
