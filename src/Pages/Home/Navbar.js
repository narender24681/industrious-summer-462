import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css";

export default function Navbar() {
    return (
        <div id="navbar-main-container">
            <div id="navbar-container">
                <div id="navbar-logo-links">
                    <div id="navbar-logo">
                        <Link to="/"><img src="/icon1.jpg" alt="" /></Link>
                    </div>
                    <div id="navbar-links1">
                        <p><Link to="/mens-clothing">MEN</Link></p>
                        <p><Link to="">WOMEN</Link></p>
                        <p><Link to="">ACCESSORIES</Link></p>
                    </div>
                </div>
                <div id="navbar-search-links">
                    <div id="navbar-search">
                        <input type="text" placeholder='Search by product' />
                    </div>
                    <div id="navbar-links2">
                        <p><Link to="/login">Login</Link></p>
                        <p><Link to="/cart">Cart</Link></p>
                        <img src="https://images.bewakoof.com/web/india-flag-round-1639566913.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}