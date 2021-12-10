import React, { useEffect } from "react";
import Template from "../components/templatemain/Template";
import Message from "../components/Message/Message";
import "./contactus.css";

function Contactus() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Template />
			<Message />
		</>
	);
}

export default Contactus;
