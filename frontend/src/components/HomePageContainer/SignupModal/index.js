import React from 'react';
import Modal from 'react-modal';

const customStyles = {
	content : {
		bottom: '240px'
	}
}

class SignupModal extends React.Component {
	render() {
	    return (
	    <div className='Login'>
		  <Modal   
		  	className=""
			isOpen={this.props.signupModalIsOpen}
	      	onRequestClose={this.props.closeSignupModal}
			ariaHideApp={false}
			style={customStyles}>
			<div className="login-box">
				<div className="row collapse expanded">
					<div className="small-12 medium-6 column small-order-2 medium-order-1">
						<div className="login-box-form-section">
							<h1 className="login-box-title">Sign up</h1>
							<input className="login-box-input" type="email" name="email" placeholder="E-mail" />
							<input className="login-box-input" type="password" name="password" placeholder="Password" />
							<input className="login-box-input" type="password" name="password2" placeholder="Retype password" />
							<input className="login-box-submit-button" type="submit" name="signup_submit" value="Sign me up" />
						</div>
						<div className="or">OR</div>
					</div>
					<div className="small-12 medium-6 column small-order-1 medium-order-2 login-box-social-section">
						<div className="login-box-social-section-inner">
							<span className="login-box-social-headline">Sign up with<br />your social network</span>
							<a className="login-box-social-button-facebook">Sign up with facebook</a>
							<a className="login-box-social-button-google">Sign up with Google+</a>
						</div>
					</div>
				</div>
			</div>
			<button className='close-button' onClick={this.props.closeSignupModal} data-close='' aria-label='Close reveal' type='button'>
				<span aria-hidden='true'>&times;</span>
			</button>
	      </Modal>
	    </div>
	    );
	}
};

export default SignupModal;