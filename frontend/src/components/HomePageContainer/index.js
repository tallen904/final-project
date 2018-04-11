import React from 'react';
import './styles.css';
import SignupContainer from './SignupContainer';
import AboutContainer from '../AboutContainer';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal'

class HomePageContainer extends React.Component {
	state = {
		loginModalIsOpen: false,
		signupModalIsOpen: false
	};

	openLoginModal = () => {
		this.setState({loginModalIsOpen: true})
	};

	openSignupModal = () => {
		this.setState({signupModalIsOpen: true})
	};

	closeSignupModal = () => {
		this.setState({signupModalIsOpen: false})
	};

	closeLoginModal = () => {
		this.setState({loginModalIsOpen: false})
	};
	render() {
	    return (
	    	<div className='home-container'>
	    		<SignupContainer 
	    			openLoginModal={this.openLoginModal}
	    			closeLoginModal={this.closeLoginModal}
	    			openSignupModal={this.openSignupModal}
	    			closeSignupModal={this.closeSignupModal} />
	    		<AboutContainer />
	    		<LoginModal 
	    			loginModalIsOpen={this.state.loginModalIsOpen}
	    			closeLoginModal={this.closeLoginModal} />
	    		<SignupModal 
	    			signupModalIsOpen={this.state.signupModalIsOpen}
	    			closeSignupModal={this.closeSignupModal} />
			</div>
	    );
	}
}

export default HomePageContainer;