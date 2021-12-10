import React from "react";
import { Link } from "react-router-dom";
import "./template.css";

function Template() {
	return (
		<>
			<div className="templatecontainer-team">
				<h2 className="templateheading">Team</h2>
				<p className="template-subheading">Find Us</p>
				<p className="location">
					<Link to='/'>Home</Link> <span className="locationmid">/</span> <Link to='/team'>Team</Link>
				</p>
			</div>
		</>
	);
}

export default Template;
