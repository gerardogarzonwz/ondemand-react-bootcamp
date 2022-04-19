import React from 'react';

import "./css/Header.css"

import logoSvg from './icons/logo.jpg';
import shoppingCart from './icons/shoppingCart.png';

const Header = () => {
    return (
        <header>
            <a id="logo">Generic Store</a>
            <nav>
                <ul>
                    <li><input type="search" placeholder="Search..." /></li>
                    <li><img src={shoppingCart} alt="" height="20" /></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;