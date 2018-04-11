import React from 'react';
import './styles.css';
import Modal from 'react-modal';

class LoginModal extends React.Component {
	render() {
	    return (
	    <div className='Login'>
	      <Modal 
	      	isOpen={this.props.loginModalIsOpen}
	      	onRequestClose={this.props.closeLoginModal}>
	        	<p>Hello World!</p>
	        	<button className='close-button' onClick={this.props.closeLoginModal} data-close='' aria-label='Close reveal' type='button'>
	        		<span aria-hidden='true'><large>&times;</large></span>
	        	</button>
	      </Modal>
	    </div>
	    );
	}
};

export default LoginModal;