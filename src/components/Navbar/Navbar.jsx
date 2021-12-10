import React, { useState } from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import eventlogo from "../../Images/eventb.png";
import iitu from "../../Images/iiitu.gif";
import aavesh from "../../Images/logoaavesh.jpeg";
import "./navbar.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Navbar() {
	AOS.init();
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
		<div
			className={
				colorChange
					? hide
						? "aavesh-nav fixed"
						: "aavesh-nav navs fixed"
					: hide
					? "aavesh-nav "
					: "aavesh-nav navs"
			}
		>
			<nav className="navbar" data-aos="fade-down">
				<div className="nav-container">
					<div className="logo-group">
						<a href="https://iiitu.ac.in/" className="navbar-brand">
							<img src={eventlogo} alt="" className="iiitu" />
						</a>
					</div>
					<div className="logo-group group-2">
						<a href="https://iiitu.ac.in/" className="navbar-brand">
							<img src={iitu} alt="" className="aaveshiit" />
						</a>
					</div>
					<div className="logo-group group-2">
						<a href="/" className="navbar-brand">
							<img src={aavesh} alt="" className="aavesh" />
						</a>
					</div>
					<div className="nav-hmburger">
						<span onClick={toogleNav}>
							<span class="navigation-button">
								<span
									class={
										hide
											? "navigation-icon"
											: "navigation-icons"
									}
								>
									&nbsp;
								</span>
							</span>
						</span>
					</div>

					<div className={hide ? "nav-hide" : "nav-items"}>
						<ul className="navbar-ul">
							<li className="navbar-item">
								<Link to="/" className="navbar-link">
									Home
								</Link>
							</li>
							<li className="navbar-item">
								<Link to="/about" className="navbar-link">
									About
								</Link>
							</li>
							<li className="navbar-item">
								<Link to="/events" className="navbar-link">
									Events
								</Link>
							</li>
							<li className="navbar-item">
								<Link to="/team" className="navbar-link">
									Team
								</Link>
							</li>
							<li className="navbar-item">
								<Link to="/contact" className="navbar-link">
									Contact
								</Link>
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
