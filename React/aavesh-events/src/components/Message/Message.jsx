import React from 'react'
import './message.css'

function Message() {
    const socialicons = [
        {
            link: "https://www.facebook.com/TeamAAVESH/",
            src: "fab fa-facebook-square",
            alt: "Facebook"
        },
        {
            link: "https://www.linkedin.com/company/aavesh-iiitu/",
            src: "fab fa-linkedin",
            alt: "LinkedIn"
        },
        {
            link: "https://www.instagram.com/teamaavesh/",
            src: "fab fa-instagram",
            alt: "Instagram"
        },
        {
            link: "https://github.com/Aavesh-IIITU",
            src: "fab fa-github-square",
            alt: "GitHub"
        }
    ]
    
    
    return (
        <>
            <div className="message-container">
                <div className="message-social">
                    <h2 className="message-heading">Stay Connected</h2>
                {
                            socialicons.map((icon, index) => (
                                <a href="" className="social-icon">
                                    <i key={index} className={icon.src}></i>
                                    <p className="message-heading">{icon.alt}</p>
                                </a>
                                
                                
                            ))
                        }
                </div>
                <div className="message form">
                       <form  className="message-form">
                           <label htmlFor="name">Full Name</label>
                           <input type="text" id="name"/>
                           <label htmlFor="name"></label>
                           <input type="text" id="name"/>
                           <label htmlFor="name"></label>
                           <input type="text" id="name"/>
                       </form>
                </div>
            </div>
        </>
    )
}

export default Message
