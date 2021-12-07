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
                <div className="message_form">
                       <form  className="message-form">
                           <div className="form-group">
                           <label htmlFor="name">Full Name</label>
                           <input type="text" id="name"/>
                           </div>
                           <div className="form-group">
                           <label htmlFor="email">Email</label>
                           <input type="email" id="email"/>
                           </div>
                           <div className="form-group">
                           <label htmlFor="message">message</label>
                           <textarea type="message" id="message"/>
                           </div>
                           
                           
                          
                           
                       </form>
                </div>
            </div>
        </>
    )
}

export default Message
