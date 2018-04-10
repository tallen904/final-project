import React from "react";
import "./styles.css";
import dummyevents from "./dummyevents.json";

const UpcomingEvents = props => {
  return (
    <div className="card event-card upcoming-events-card">
      <div className="card-divider">
        <h3>{props.heading}</h3>
      </div>
      <div className="card-section">
        {dummyevents.map((event,i) => {
            const btnStyle = {
                display: 'flex',
                justifyContent: 'space-between'
            }
            const divStyle = {
                width: '100%',
                borderBottom: '1px solid black'
            }
            return <div key={i} style={divStyle}>
                <h4>{event.event}</h4>
                <div style={btnStyle}>
                  <p>
                    <strong>{event.date}</strong>
                  </p>
                  <button className='button'>Join Event</button>
                </div>
                <p>{event.location}</p>
              </div>;
        })}
      </div>
    </div>
  );
};

export default UpcomingEvents;
