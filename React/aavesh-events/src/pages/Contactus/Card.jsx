import React from 'react'
import './card.css'
import instagram from '../../Images/instagram.svg'
import linkedin from '../../Images/linkedin.svg'
import github from '../../Images/github.svg'
import phone from '../../Images/phone.svg'
import email from '../../Images/email.svg'
import favicon from '../../Images/favicon.png'

const Card = ({ name, subtitle, image, socials }) => {
	const getIcon = (handle) => {
		switch (handle) {
			case "instagram":
				return instagram;
			case "linkedin":
				return linkedin;
			case "github":
				return github;
			case "phone":
				return phone;
			case "email":
				return email;
			default:
				return favicon;
		}
	}
	const getLink = (handle, link) => {
		if (handle === "email")
			return `mailto:${link}`
		else if (handle === "phone") return `tel:${link}`
		else return link;
	}
	return (
		<div className="card">
			<div className="card-container" style={
				{
					backgroundImage: `url(${image}), 
									    linear-gradient(
									        rgba(0,0,0,0.2),
									        rgba(0,0,0,0.5),
									        rgba(0,0,0,0.7),
									        rgba(0,0,0,0.9)
									    )
									`
				}
			}>
				<div className="card-details">
					<span className="card-details__name">
						{name}
					</span>
					<span className="card-details__subtitle">
						{subtitle}
					</span>
				</div>
				<div className="card-socials">
					{
						socials.map((social, index) => (
							<div className="card-social" key={index}>
								<a className={`card-social-icon ${social.handle}`} href={getLink(social.handle, social.link)}>
									<img
										src={getIcon(social.handle)}
										className="card-social-icon__img"
										alt={name}
									/>
								</a>
							</div>
						))
					}
				</div>
			</div>
		</div>
	)
}

export default Card
