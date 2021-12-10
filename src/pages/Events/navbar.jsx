import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
function navbar() {
	return (
		<div className="main">
			<h2 className="templateheading">Team</h2>
			<p className="template-subheading">Find Us</p>
			<p className="location">
				<Link to="/">Home</Link> <span className="locationmid">/</span> <Link to="/events">Events</Link>
			</p>
		</div>
	);
}

export default navbar;
