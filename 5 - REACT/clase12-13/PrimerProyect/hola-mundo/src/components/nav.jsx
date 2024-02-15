import React, { Component } from "react";
import '../assets/style.css'

class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <div className="flex-container">
                    <h1 className="nav-title">Profile</h1>
                    <ul className="nav-links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#" className="active">My Profile</a></li>
                        <li><a href="#">Find Connections</a></li>
                        <li><button className="btn">Sign Out</button></li>
                    </ul>
                </div>
            </div>
        );
    };
}

export default Nav