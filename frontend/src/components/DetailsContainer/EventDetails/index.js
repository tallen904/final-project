import React from 'react';

const EventDetails = props => {
    return (
        <div className='event-details small-12 large-9 columns'>
            <h1>{props.title}</h1>
            <h3>When: {props.date}</h3>
            <h3>Where: {props.location}</h3>
        </div>
    );
};

export default EventDetails;