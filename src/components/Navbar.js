import React, { Component } from 'react';
import s from '../style/js/app.style.js';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar-container">
                <div id="navbar-title"><h1>Daniel Van Horn</h1></div>
                <div id="menu-toggle">
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul id="link-container">
                        <a href='./'><li>Home</li></a>
                        <a href='./resume'><li>Resume</li></a>
                        <a href='./projects'><li>Projects</li></a>
                        <a href='./contact'><li>Contact</li></a>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;