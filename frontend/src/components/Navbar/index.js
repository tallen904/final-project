import React from 'react';
import logo from './assets/logo.png';

class Navbar extends React.Component {
    render() {
        return (
            <div className='row collapse navbar'>
                <div className='small-5 columns'>
                    <div>
                        <a className="logo" href="#!">
                            <img src={logo} alt="logo"/><span className='logo-header'>ruzin'</span>
                        </a>
                    </div>
                </div>
                <div className='small-7 columns'>
                    <ul class="menu align-right">
                        <li><a href="#" onClick={this.props.openSignupModal}>Signup</a></li>
                        <li><a href="#" onClick={this.props.openLoginModal}>Login</a></li>
                    </ul>
                </div>
            </div>
        )
    }
};

export default Navbar;