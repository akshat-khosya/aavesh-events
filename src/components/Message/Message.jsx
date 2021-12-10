import React, { useState } from "react";
import "./message.css";
import Button from "../Button/Button";
import axios from "axios";
function Message() {
	const [contact, setContact] = useState({
		name: "",
		email: "",
		message: "",
	});

	function handelChnage(event) {
		const { name, value } = event.target;
		setContact((prevValue) => {
			return {
				...prevValue,
				[name]: value,
			};
		});
	}
	function SendMessage(event) {
		event.preventDefault();
		console.log(contact);
		axios
			.post("https://myownrestfullapi.herokuapp.com/sendmail", contact)
			.then(function (response) {
				console.log(response.data);
				if (response.data.sent) {
					setContact({
						name: "",
						email: "",
						message: "Message Sent Successfully",
					});
				}

				return response.data;
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	const socialicons = [
		{
			link: "https://www.facebook.com/TeamAAVESH/",
			src: "fab fa-facebook-square",
			alt: "Facebook",
		},
		{
			link: "https://www.linkedin.com/company/aavesh-iiitu/",
			src: "fab fa-linkedin",
			alt: "LinkedIn",
		},
		{
			link: "https://www.instagram.com/teamaavesh/",
			src: "fab fa-instagram",
			alt: "Instagram",
		},
		{
			link: "https://github.com/Aavesh-IIITU",
			src: "fab fa-github-square",
			alt: "GitHub",
		},
		{
			link: "mailto:aavesh@iiitu.ac.in",
			src: "fas fa-envelope-square",
			alt: "aavesh@iiitu.ac.in",
		},
	];

	return (
		<>
			<div className="message-container">
				<div className="message-social">
					<h2 className="message-heading">Stay Connected</h2>
					{socialicons.map((icon, index) => (
						<a
							href={icon.link}
							target="_blank"
							className="social-icon"
						>
							<i key={index} className={icon.src}></i>
							<p className="message-sub-heading">{icon.alt}</p>
						</a>
					))}
				</div>
				<div className="message_form">
					<form onSubmit={SendMessage} className="message-form">
						<div className="form-group">
							<label htmlFor="name">Full Name</label>
							<input
								onChange={handelChnage}
								value={contact.name}
								placeholder="Your Name"
								name="name"
								type="text"
								id="name"
							/>
						</div>
						<div className="form-group">
							<label htmlFor="email">Email</label>
							<input
								onChange={handelChnage}
								value={contact.email}
								placeholder="Your Email"
								name="email"
								type="email"
								id="email"
							/>
						</div>
						<div className="form-group">
							<label htmlFor="message">Message</label>
							<textarea
								onChange={handelChnage}
								rows="7"
								value={contact.message}
								placeholder="Your Message Here"
								name="message"
								type="message"
								id="message"
							/>
						</div>

						<div className="form-btn">
							<Button type="submit" text="Submit" />
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default Message;
