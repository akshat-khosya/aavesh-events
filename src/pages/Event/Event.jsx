import React, { useState, useEffect } from "react";
import "./Event.css";
import EventTop from "./EventTop";
import { Link } from "react-router-dom";
import _ from "lodash";
import ScrollToTop from "../../components/ScrollToTop";

const extractRoute = () => {
	let a = window.location.href,
		b = "",
		c = "";
	for (let i = a.length - 1; a[i] !== "/"; --i) b += a[i];
	let n = b.length - 1;
	for (let i = n; i >= 0; --i) c += b[i];
	return c;
};

const HeadLink = ({ title, route, text, isActive, onClick, id }) => {
	let colors = ["indigo", "red", "brown", "dark-purple"];
	const borderWidth = "5";
	return (
		<span
			className="event-head__link"
			style={{
				backgroundColor: !isActive
					? `var(--${colors[id]}-100)`
					: `var(--${colors[id]}-400)`,
				borderTop: `${borderWidth}px solid ${
					!isActive ? "transparent" : `var(--${colors[id]}-400)`
				}`,
				borderLeft: `${borderWidth}px solid ${
					!isActive ? "transparent" : `var(--${colors[id]}-400)`
				}`,
				borderRight: `${borderWidth}px solid ${
					!isActive ? "transparent" : `var(--${colors[id]}-400)`
				}`,
				borderBottom: `${borderWidth}px solid ${
					isActive
						? `var(--${colors[id]}-400)`
						: `var(--${colors[id]}-400)`
				}`,
			}}
			onClick={onClick}
		>
			<Link
				to={`/${_.kebabCase(title)}/${route}`}
				style={{
					color: `var(--${!isActive ? "tcolor" : "bgcolor"})`,
				}}
			>
				{text}
			</Link>
		</span>
	);
};

const Event = ({ event, render }) => {
	useEffect(() => {
		window.scrollTo(0, 0);
		check(extractRoute());
	}, []);
	const [activeRoute, setActiveRoute] = useState([true, false, false, false]);
	const {
		title,
		content,
		backImg,
		mode,
		schedule,
		images,
		rules,
		prizes,
		others,
	} = event;
	const routes = [
		{
			link: "about",
			text: `About ${title}`,
		},
		{
			link: "rules",
			text: "Rules",
		},
		{
			link: "prizes",
			text: `Prizes`,
		},
		{
			link: "others",
			text: `Other Details`,
		},
	];
	const check = (route) => {
		let newArr = [...activeRoute];
		routes.forEach((item, index) => {
			if (item.link === route) newArr[index] = true;
			else newArr[index] = false;
			setActiveRoute(newArr);
		});
	};
	return (
		<div className="event">
			<div
				className="event-container"
				onClick={() => {
					extractRoute();
				}}
			>
				<div
					className="event-top-container"
					style={{
						backgroundImage: `url(${backImg})`,
						backgroundAttachment: "fixed",
					}}
				>
					<EventTop title={title} mode={mode} schedule={schedule} />
				</div>
				<div className="event-body">
					<div className="event-head">
						{routes.map((route, index) => (
							<HeadLink
								title={title}
								route={route.link}
								text={route.text}
								isActive={activeRoute[index]}
								onClick={() => {
									check(route.link);
								}}
								key={index}
								id={index}
							/>
						))}
					</div>
				</div>
				<>{render}</>
			</div>
			<ScrollToTop startAfter={600} takeTo={25} />
		</div>
	);
};

export default Event;
