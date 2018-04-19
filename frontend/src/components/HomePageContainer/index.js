import React from 'react';
import SignupContainer from './SignupContainer';
import AboutContainer from '../AboutContainer';

class HomePageContainer extends React.Component {
	render() {
	    return (
	    	<div className='home-container'>
	    		<SignupContainer 
	    			openLoginModal={this.props.openLoginModal}
	    			openSignupModal={this.props.openSignupModal} />
	    		<AboutContainer />

			</div>
	    );
	}
}

export default HomePageContainer;