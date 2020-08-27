import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'


const Header = () => {
    return (
        <div className = 'header'>
            <img src={logo} alt = ""/>
            <nav>
                <a href="/Shop">Shop</a>
                <a href="/review">Order review</a>
                <a href="/manage-inventory">Manage inventory</a>
            </nav>
        </div>
    );
};

export default Header;