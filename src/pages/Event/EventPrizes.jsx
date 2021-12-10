import React from 'react'
import gold from '../../images/gold.svg'
import silver from '../../images/silver.svg'
import bronze from '../../images/bronze.svg'

const EventPrizes = ({ prizes }) => {
    return (
        <div className="event-prizes">
            <span className="event-prizes__title">
                Prizes:
            </span>
            <div className="event-prizes__dl row">
                {
                    prizes.map((prize, index) => (
                        <div key={index} className={`event-prize ${index === 0 ? `col-lg-100` : `col-lg-50`} col-md-100 col-sm-100`}>
                            <img className="event-prize__img" src={index === 0 ? gold : (index === 1 ? silver : bronze)} />
                            <div className="event-prize__dc">
                                <span className="event-prize__dt" key={index}>{prize.title}</span>
                                <span className="event-prize__dd">{prize.about}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default EventPrizes
