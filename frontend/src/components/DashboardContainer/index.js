import React from 'react';
import './styles.css'
import Widget from './Widget'
import UpcomingEvents from './UpcomingEvents'


const DashboardContainer = props => {
    return <div className="dashboard-container">
        <div className="callout success dashboard-heading">
          <h4>My Dashboard</h4>
          <h5>Welcome back, {props.user}</h5>
        </div>
        <div className='create-event-div'>
          <button className="button expand create-event-button">Create New Event</button>
        </div>
        <div className="widget-row">
          <Widget heading="My Events" />
          <UpcomingEvents heading="Upcoming Events" />
        </div>
      </div>;
};
export default DashboardContainer;