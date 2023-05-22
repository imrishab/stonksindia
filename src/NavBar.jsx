import React from 'react';
import MainButton from './components/MainButton';
import './NavBar.css';

const Navbar = () => {
    return (
        <div className='navbar-card'>

            <div className="logo">stonks<span>India</span></div>

            <ul>
                <li>Home</li>
                <li>Screener</li>
                <li>SIP Calculator</li>
                <li>Blog</li>
            </ul>

            <MainButton>Login/signup</MainButton>

        </div>
    );
};

export default Navbar;
