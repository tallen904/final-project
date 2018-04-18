import React from 'react';
import logo from './assets/logo.png';

const Navbar = () => {
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
                    <li><a href="#">Signup</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </div>
        </div>
    )
};

export default Navbar;