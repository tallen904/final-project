import React from "react";

const Title = props => {
	return (
  <div className='event-title'>
   <h1>{props.title || 'Event Title'}</h1>
  </div>


	);
};

export default Title;