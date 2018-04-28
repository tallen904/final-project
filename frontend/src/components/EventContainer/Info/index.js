import React from "react";

const Info = props => {
	return (
  <div className='content-container'>
   <h3>Location: {props.event.location}</h3>
   <h5>Date: {props.event.time}</h5>
  </div>


	);
};

export default Info;