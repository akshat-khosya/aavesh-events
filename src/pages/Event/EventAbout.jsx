import React from 'react';
import blob1 from '../../images/blob1.svg'
import blob2 from '../../images/blob2.svg'
import blob3 from '../../images/blob3.svg'
import Aos from 'aos';
import 'aos/dist/aos.css';

const EventAbout = ({ title, content, images }) => {
    Aos.init();
    const blobs = [blob1, blob2, blob3];
    return (
        <div className="event-about">
            <div className="event-about__title" data-aos="zoom-out">
                {`About ${title}`}
            </div>
            {
                images.map((image, index) => (
                    <div className="event-about__container" key={index} data-aos="fade-up">
                        <div className="event-about__content" style={
                            {
                                backgroundImage: `url(${blobs[index]})`
                            }
                        }>
                            {content[index]}
                        </div>
                        <div className="event-about__image" data-aos="zoom-in">
                            <img src={images[index]} alt={title} />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default EventAbout
