import React, { useEffect } from "react";
import Header from "./navbar";
import Card from "./body";
function Events() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Header />
			<Card />
		</>
	);
}

export default Events;
