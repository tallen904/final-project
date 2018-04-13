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
			<div className="login-box">
				<div className="row collapse expanded">
					<div className="small-12 medium-6 column small-order-2 medium-order-1">
						<div className="login-box-form-section-login">
							<h1 className="login-box-title">Log in with your email account</h1>
								<input className="login-box-input" type="email" placeholder="somebody@example.com" />
								<input className ="login-box-input" type="password" placeholder="Password" />
								<input className="password-show" id="show-password" type="checkbox" /><span>Show password</span>
								<p><input type="submit" className="button expanded" value="Log in"></input></p>
								<p className="text-center"><a href="#">Forgot your password?</a></p>
						</div>
						<div className="login-or">OR</div>
					</div>
					<div className="small-12 medium-6 column small-order-1 medium-order-2 login-box-social-section">
						<div className="login-box-social-section-inner-login">
							<span className="login-box-social-headline">Sign up with<br />your social network</span>
							<a className="login-box-social-button-facebook">Sign up with facebook</a>
							<a className="login-box-social-button-google">Sign up with Google+</a>
						</div>
					</div>
				</div>
			</div>
			<button className='close-button' onClick={this.props.closeLoginModal} data-close='' aria-label='Close reveal' type='button'>
				<span aria-hidden='true'>&times;</span>
			</button>
	      </Modal>
	    </div>
	    );
	}
};

export default LoginModal;