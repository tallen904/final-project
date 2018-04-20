import React from 'react';
import Navbar from '../../components/Navbar';
import HomePageContainer from '../../components/HomePageContainer';
import LoginModal from '../../components/HomePageContainer/LoginModal';
import SignupModal from '../../components/HomePageContainer/SignupModal';
import Footer from '../../components/Footer';

class Home extends React.Component {
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
            <div>
                <Navbar 
                openLoginModal={this.openLoginModal}
                openSignupModal={this.openSignupModal} />
                <HomePageContainer 
                openLoginModal={this.openLoginModal}
                openSignupModal={this.openSignupModal} />
                <LoginModal 
	    			loginModalIsOpen={this.state.loginModalIsOpen}
	    			closeLoginModal={this.closeLoginModal} />
	    		<SignupModal 
	    			signupModalIsOpen={this.state.signupModalIsOpen}
	    			closeSignupModal={this.closeSignupModal} />
                <Footer />
            </div>
        );
    }
};

export default Home;