import React from "react";
import { Link } from "react-router-dom";
import "./template.css";

function Template() {
	return (
		<>
			<div className="templatecontainer">
				<h2 className="templateheading">Contact Us</h2>
				<p className="template-subheading">Feel free to contact</p>
				<p className="location">
				<Link to='/'>Home</Link> <span className="locationmid">/</span> <Link to='/contact'>Contact</Link>
				</p>
			</div>
		</>
	);
}

export default Template;
