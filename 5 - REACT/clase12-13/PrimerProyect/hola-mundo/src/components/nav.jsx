import React, { Component } from "react";
//import '../assets/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';


class Nav extends Component {
    render() {

        return (
            <div className="nav main">
                <div className="flex-container">
                    <h1 className="nav-title">Profile</h1>
                    <ul className="nav navbar-nav">
                        <li><a href="#" className="nav-link"> Home</a></li>
                        <li><a href="#" className="nav-link active">My Profile</a></li>
                        <li><a href="#" className="nav-link">Find Connections</a></li>
                        <li><button className="btn btn-primary">Sign Out</button></li>
                    </ul>
                </div>
            </div>
        );
    };
}

export default Nav