import React from 'react'
import cave from '../../images/cave.png'
import Aos from 'aos'
import 'aos/dist/aos.css';

const EventTop = ({ title, mode, schedule }) => {
    Aos.init();
    return (
        <div className="event-top" style={{ backgroundImage: (window.innerWidth>800)?`url(${cave})`:"none" }}>
            <div className="event-top-head" data-aos="zoom-out">
                <span className="event-top-head__title" style={
                    {
                        width: (window.innerWidth>800)?`${title.length * 1.3}ch`:'100%',
                        animation: (window.innerWidth>800)?`typing ${title.length / 8}s steps(${title.length}), blink .5s step-end infinite alternate`:'none'
                    }
                }>
                    {title}
                </span>
            </div>
            <div className="event-top-details" data-aos="zoom-out">
                <span className="event-top-details__mode">
                    <span className="event-top-details__mode__icon">
                        <span className="material-icons">interpreter_mode</span>
                    </span>
                    <span className="event-top-details__mode__text">
                        {mode}
                    </span>
                </span>
                <span className="event-top-details__schedule">
                    <span className="event-top-details__schedule__icon">
                        <span className="material-icons">schedule</span>
                    </span>
                    <span className="event-top-details__schedule__text">
                        {schedule}
                    </span>
                </span>
            </div>
        </div>
    )
}

export default EventTop
