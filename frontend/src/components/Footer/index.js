import React from 'react';
import './styles.css'
import { Menu, MenuItem } from 'react-foundation'

const Footer = () => {
    return <div className="page-footer">
        <Menu className="footer-menu">
          <MenuItem className="footer-menu-item">
            <a>One</a>
          </MenuItem>
          <MenuItem className="footer-menu-item">
            <a>Two</a>
          </MenuItem>
          <MenuItem className="footer-menu-item">
            <a>Three</a>
          </MenuItem>
          <MenuItem className="footer-menu-item">
            <a>Four</a>
          </MenuItem>
        </Menu>
        <p className='copyright-text'><small>&copy; Copyright Text 2018</small></p>
      </div>;
};

export default Footer;