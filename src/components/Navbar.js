import React, { Component } from 'react';
import s from '../style/js/app.style.js';


class Navbar extends Component {
    render() {
        return (
            <div className="navbar-container">
                <h1 id="navbar-title">Daniel Van Horn</h1>
                <div className="link-container">
                    <a className="link" href='./'>Home</a>
                    <a className="link" href='./resume'>Resume</a>
                    <a className="link" href='./projects'>Projects</a>
                    <a className="link" href='./contact'>Contact</a>
                </div>
            </div>
        );
    }
}

export default Navbar;