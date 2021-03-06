import React from 'react';
import { Link } from 'react-router-dom'

const MyEvents = props => {
    const isDriver = event => {
        const iconStyle = { width: "50px", height: "50px" };
        if (event.driver === props.userId) {
          return <img style={iconStyle} alt='driver' data-tooltip aria-haspopup="true" className="has-tip" data-disable-hover="false" tabIndex="1" title="You are a driver for this event." src="http://icons.iconarchive.com/icons/icons8/android/256/Transport-Car-icon.png" />;
        } else if (!event.driver) {
          return <img style={iconStyle} alt="passenger" data-tooltip aria-haspopup="true" className="has-tip" data-disable-hover="false" tabIndex="1" title="You are a passenger for this event." src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-person-128.png" />;
        }
    }

    return <div className="card current-events-card columns small-12 large-5 no-pad">
        <div className="card-divider">
          <h3>{props.heading}</h3>
        </div>
        <div className="card-section">
          {props.myEvents.map((event, i) => {
            return <div key={i} className="my-event" >
                <h4>{event.name}</h4>
                <p>{event.time}</p>
                <p>{event.location}</p>
                <div className="row">
                  <div className="small-9">
                    <Link className="button" to={`/event/${event._id}`}>
                      Event Details
                    </Link>
                  </div>
                  <div className="small-2 driver-icon">
                    {isDriver(event)}
                  </div>
                </div>
              </div>;
          })}
        </div>
      </div>;
};

export default MyEvents;