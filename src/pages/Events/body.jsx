import React from "react";
import ScrollToTop from "../../components/ScrollToTop.jsx";
import eventsData from "../../events.js";
import Event from "./event";
import "./event.css";
const card = () => {
	return (
		<div className="content">
			{eventsData.map(function (item) {
				return (
					<Event
						title={item.title}
						content={item.content[0].slice(0, 200)}
						image={item.backImg}
						schedule={item.schedule}
					/>
				);
			})}
			<ScrollToTop />
		</div>
	);
};

export default card;
