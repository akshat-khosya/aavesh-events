import React from "react";
import "./aboutsection.css";
import Button from "../Button/Button";
import pdf from "../../aavesh.pdf";
import about2 from "../../Images/abou2.jpeg";
import about3 from "../../Images/about3.jpeg";
function AboutSection() {
	return (
		<>
			<section className="home-about">
				<div className="habout-con">
					<div className="habout-content">
						<p className="habout-subheading">JOIN THE EVENT</p>
						<h1 className="habout-heading">TECHतत्त्व</h1>
						<p className="habout-para">
							Techtatva is the technical and social event
							conducted by AAVESH, IIIT Una. It marks days of
							absolute ecstasy providing participants a competing
							platform in technical, non-technical and some fun
							events.
							<br />
							<br />
							It is an avenue to be comforted from the routine
							life and to embrace the fun. Planned as a 'for the
							students, of the students, by the students' event,
							the festival is the most awaited event of the year.
						</p>
					</div>
					<div className="habout-imgs composition">
						<img
							className="composition__photo "
							src={about2}
							alt=""
						/>
					</div>
				</div>
				<div className="habout-con-2">
					<div className="habout-imgs composition">
						<img
							className="composition__photo "
							src={about3}
							alt=""
						/>
					</div>
					<div className="habout-content">
						<h1 className="habout-heading">MISSION</h1>
						<p className="habout-para-2">
							To promote Science, Technology, Engineering and
							Mathematics (STEM) activities to young people and
							the wider community.
							<br /> 1. A quality inclusive working environment
							which is responsive to a member's voice
							<br /> 2. Learning from the past mistakes and
							working together as a team for the betterment of the
							institution. <br />
							3. Setting an ideal "benchmark” for the coming year
							students regarding managing vital events of our
							institute.
						</p>
						<div className="habout-btn-groups">
							<Button
								classs="habout-btn-color"
								target="_blank"
								link={pdf}
								text="Download Broucher"
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default AboutSection;
