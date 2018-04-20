import React from 'react';

const ParticipantList = props => {
    return (
        <div className='participant-list small-12 large-3 columns'>
            <div className='row align-center'>
                <h4 className='small-12 columns'>Drivers</h4>
                {props.drivers.map((driver, i) => {
                  return ( <div key={i} className='small-12 large-6 columns'>
                        <img src='!#' alt={driver} />
                        <p>{driver}</p>
                    </div>
                  )
                })}
            </div>
            <div className='row align-center'>
                <h5 className='small-12 columns'>Passengers</h5>
                {props.passengers.map((passenger, i) => {
                  return ( <div key={i} className='small-6 large-3 columns'>
                        <img src='!#' alt={passenger} />
                        <p>{passenger}</p>
                    </div>
                  )
                })}
            </div>
        </div>
    );
};

export default ParticipantList;