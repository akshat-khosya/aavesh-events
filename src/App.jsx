import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Event from "./pages/Event/Event.jsx";
import _ from "lodash";
import events from "./events";
import Events from './pages/Events/Events';
import EventAbout from "./pages/Event/EventAbout";
import EventRules from "./pages/Event/EventRules";
import EventPrizes from "./pages/Event/EventPrizes";
import EventOthers from "./pages/Event/EventOthers";
import Team from "./pages/Team/Team";
import Contactus from "./pages/Contactus";

const App = () => {
	return (
		<Router>
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/contact" element={<Contactus />} />
					<Route path="/team" element={<Team />} />
				        <Route path='/events' element={<Events />} />
					{events.map((event, index) => (
						<>
							<Route
								key={index}
								path={`/${_.kebabCase(event.title)}`}
								element={
									<Event
										event={event}
										render={
											<EventAbout
												content={event.content}
												images={event.images}
												title={event.title}
											/>
										}
									/>
								}
							/>
							<Route
								path={`/${_.kebabCase(event.title)}/about`}
								element={
									<Event
										event={event}
										render={
											<EventAbout
												content={event.content}
												images={event.images}
												title={event.title}
											/>
										}
									/>
								}
							/>
							<Route
								path={`/${_.kebabCase(event.title)}/rules`}
								element={
									<Event
										event={event}
										render={
											<EventRules rules={event.rules} />
										}
									/>
								}
							/>
							<Route
								path={`/${_.kebabCase(event.title)}/prizes`}
								element={
									<Event
										event={event}
										render={
											<EventPrizes
												prizes={event.prizes}
											/>
										}
									/>
								}
							/>
							<Route
								path={`/${_.kebabCase(event.title)}/others`}
								element={
									<Event
										event={event}
										render={
											<EventOthers
												others={event.others}
											/>
										}
									/>
								}
							/>
						</>
					))}
				</Routes>
			</main>
			<Footer />
		</Router>
	);
};

export default App;
