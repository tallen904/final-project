import React from 'react';
import './styles.css';
import Modal from 'react-modal';

class SignupModal extends React.Component {
	render() {
	    return (
	    <div className='Login'>
	      <Modal 
	      	isOpen={this.props.signupModalIsOpen}
	      	onRequestClose={this.props.closeSignupModal}>
	        	<form>
	        		Email:
	        		<input type='email' name='email' />
	        	</form>
	        	<button className='close-button' onClick={this.props.closeSignupModal} data-close='' aria-label='Close reveal' type='button'>
	        		<span aria-hidden='true'><large>&times;</large></span>
	        	</button>
	      </Modal>
	    </div>
	    );
	}
};

export default SignupModal;