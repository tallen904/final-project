import React from 'react';

class SignupContainer extends React.Component {
	render() {
		return (
	        <div className='signup-container'>
				<div className='row'>
					<div className='small-12 medium-6 columns'>
	            		<button className='button' onClick={this.props.openSignupModal}>Signup</button>
					</div>
					<div className='small-12 medium-6 columns'>
	            		<button className='button' onClick={this.props.openLoginModal}>Login</button>
					</div>
				</div>
			</div>
	    );
	};
}

export default SignupContainer;