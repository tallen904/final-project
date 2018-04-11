import React from 'react';
import './styles.css';

const AboutContainer = () => {
	return (
		<div className='about-app'>
			<h1>Section about app</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
				sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
				Ut enim ad minim veniam, quis nostrud exercitation ullamco 
				laboris nisi ut aliquip ex ea commodo consequat. 
				Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
				dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
				sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>
				<div className='app-icons'>
					<img alt='' src='http://iconbug.com/download/size/256/icon/861/plus-sign/' />
					<img alt='' src='http://iconbug.com/download/size/256/icon/861/plus-sign/' />
					<img alt='' src='http://iconbug.com/download/size/256/icon/861/plus-sign/' />
				</div>
		</div>
	);
}

export default AboutContainer;