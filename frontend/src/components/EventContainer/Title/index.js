import React from "react";

const Title = props => {
	return (
  <div className='event-title-style events-title-container-desktop '>

   <h1>{props.title || 'Event Title'}</h1>
  </div>


	);
};

export default Title;