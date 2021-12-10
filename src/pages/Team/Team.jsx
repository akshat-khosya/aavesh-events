import React,{useEffect} from "react";
import people from "./team";
import Card from "./Card";
import Teamtemplate from "../../components/templatemain/Teamtemplate";
import ScrollToTop from "../../components/ScrollToTop";

const Team = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [])
	return (
		<>
			<Teamtemplate />
			<section className="team">
				<div className="team-container">
					<div className="team-head">
						<span className="team-head__title">Team</span>
					</div>
					<div className="team-body">
						<div className="row">
							{people.map((person, index) => (
								<div
									className="col-lg-25 col-md-50 col-sm-100"
									key={index}
								>
									<Card
										name={person.name}
										subtitle={person.subtitle}
										image={person.image}
										socials={person.socials}
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
			<ScrollToTop />
		</>
	);
};

export default Team;
