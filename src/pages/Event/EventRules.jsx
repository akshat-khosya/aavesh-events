import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css';

const EventRules = ({ rules }) => {
    Aos.init();
    return (
        <div className="event-rules">
            <span className="event-rules__title">
                Rules
            </span>
            <ul className="event-rules__ul">
                {
                    rules.map((rule, index) => (
                        <li className="event-rules__li" key={index} data-aos="fade-up">
                            {rule}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default EventRules
