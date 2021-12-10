import React from "react";
import { Link } from "react-router-dom";
import "./event.css";
import _ from "lodash";

function event(props) {
	return (
		<>
			<div className="container">
				<div className="event_top">
					<img src={props.image} alt="" className="event_img" />
					<p>{props.schedule}</p>
				</div>

				<h1>{props.title}</h1>
				<div className="event_bottom">
					<p>{props.content}</p>
					<Link
						to={`/${_.kebabCase(props.title)}`}
						className="readmore"
					>
						Read more
					</Link>
				</div>
			</div>
		</>
	);
}

export default event;
