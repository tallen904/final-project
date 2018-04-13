import React from 'react';
import Modal from 'react-modal';

class LoginModal extends React.Component {
	render() {
	    return (
	    <div className='Login'>
	      <Modal 
	      	isOpen={this.props.loginModalIsOpen}
	      	onRequestClose={this.props.closeLoginModal}
			ariaHideApp={false}>
				<form className="log-in-form">
					<h4 className="text-center">Log in with your email account</h4>
					<label>Email
						<input type="email" placeholder="somebody@example.com" />
					</label>
					<label>Password
						<input type="password" placeholder="Password" />
					</label>
					<input id="show-password" type="checkbox" /><label for="show-password">Show password</label>
					<p><input type="submit" className="button expanded" value="Log in"></input></p>
					<p className="text-center"><a href="#">Forgot your password?</a></p>
					<div className="or">OR</div>
					<div className="small-12 medium-6 column small-order-1 medium-order-2 login-box-social-section">
							<div className="login-box-social-section-inner">
								<span className="login-box-social-headline">Log in with<br />your social network</span>
								<a className="login-box-social-button-facebook">Log in with facebook</a>
								<a className="login-box-social-button-google">Log in with Google+</a>
							</div>
					</div>
				</form>
	        	<button className='close-button' onClick={this.props.closeLoginModal} data-close='' aria-label='Close reveal' type='button'>
	        		<span aria-hidden='true'><large>&times;</large></span>
	        	</button>
	      </Modal>
	    </div>
	    );
	}
};

export default LoginModal;