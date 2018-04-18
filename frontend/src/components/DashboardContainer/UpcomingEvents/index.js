import React from "react";

const UpcomingEvents = props => {
  return (
    <div className="card event-card upcoming-events-card columns small-12 large-5 no-pad">
      <div className="card-divider">
        <h3>{props.heading}</h3>
      </div>
      <div className="card-section">
        {props.events.map((event,i) => {
            const divStyle = {
                width: '100%',
                borderBottom: '1px solid black',
                padding: '1rem'
            }
            return <div key={i} style={divStyle}>
                <h4>{event.name}</h4>
                <div className="row">
                  <div className="small-8 columns">
                    <p className="no-pad">{event.time}</p>
                  </div>
                </div>
                <p className="no-pad">{event.location}</p>
                <div className="row align-center">
                  <button className="button small-6 columns">Join This Event!</button>
                </div>
              </div>;
        })}
      </div>
    </div>
  );
};

export default UpcomingEvents;
