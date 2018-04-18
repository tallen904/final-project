import React from 'react';

const AboutContainer = () => {
	return (
		<div className='container'>
			<div className='row'>
				<div className='small-12 columns'>
					<div className='about-app'>
						<h2>Plan carpools for your group the right way!</h2>
							<h4>Manage your carpools on the go with three easy steps.</h4>
					</div>
				</div>
			</div>
			<div className='row'>
				<div className='small-12 medium-4 columns text-center'>
					<div className='app-icon'>
						<i className='far fa-calendar-alt'></i>
						<h5>Create Event</h5>
					</div>
				</div>
				<div className='small-12 medium-4 columns text-center'>
					<div className='app-icon'>
						<i className='fas fa-car'></i>
						<h5>Add Driver(s)</h5>
					</div>
				</div>
				<div className='small-12 medium-4 columns text-center'>
					<div className='app-icon'>
						<i className='fas fa-users'></i>
						<h5>Join A Car</h5>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutContainer;