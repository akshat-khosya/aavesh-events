import React from 'react'
import eventsData from './eventsData'
import Event from './event'
import './event.css'
const card = () => {
    return (
        <div className='content'> 
            {eventsData.map(function(item){return(
                <Event title={item.title} content={item.content[0].slice(0,200)} image={item.images[0]} schedule={item.schedule} />  );
            })}
        </div>
    )
}

export default card
