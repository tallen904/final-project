import React from 'react';
import ParticipantList from './ParticipantList'
import EventDetails from './EventDetails'
import MeetupDetails from './MeetupDetails'

const DetailsContainer = () => {
    return <div className="details-container row">
        <EventDetails title='Cool Event!!!' date='April 19th, 2018' location='UCSD' />
        <ParticipantList drivers={["Tanner", "Kat"]} passengers={["James", "Kevin", "Joey", "Will"]} />
        <MeetupDetails />
      </div>;
};

export default DetailsContainer;