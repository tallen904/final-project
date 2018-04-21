import React from 'react';

const MyEvents = props => {
    console.log(props.myEvents)
    const isDriver = event => {
        const iconStyle = { width: "50px", height: "50px" };
        if (event.driver) {
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
            const style = { color: "black", borderBottom: "1px solid black", width: "100%" };
            const iconDivStyle = { display: 'flex', justifyContent: 'space-between' };
            return <a key={i} style={style} href="#!">
                <div style={style}>
                  <h4>{event.name}</h4>
                  <div style={iconDivStyle}>
                    <p>{event.date}</p>
                    {isDriver(event)}
                  </div>
                  <p>{event.location}</p>
                </div>
              </a>;
          })}
        </div>
      </div>;
};

export default MyEvents;