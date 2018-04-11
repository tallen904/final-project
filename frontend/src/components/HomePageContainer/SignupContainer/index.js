import React from 'react';
import './styles.css';

class SignupContainer extends React.Component {
	render() {
		return (
	        <div className='signup-container'>
	            <button className='signup-btn' onClick={this.props.openSignupModal}>Signup</button>
	            <button className='login-btn' onClick={this.props.openLoginModal}>Login</button>
	        </div>
	    );
	};
}

export default SignupContainer;