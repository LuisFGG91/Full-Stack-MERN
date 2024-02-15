import React, { Component } from "react";
import '../assets/style.css';
import img1 from '../assets/img/adrien-s.jpg';

class UserCard extends Component {
    render() {
        const { firstName, lastName } = this.props;
        return (
                <div className="card user-card">
                    <div className="card-header">
                        <img src={img1} alt="jane" className="avatar-m" />
                    </div>
                    <div className="card-body">
                    <h1 id="username">{firstName} - {lastName} </h1>
                        <h3> Seattle</h3> <img src={img1} alt="pin" className="icon-s" />
                        <p>Developer | Engineer | Problem Solver
                                Master of shadows and the Internet!</p>
                        <p ><a href="#"><img src={img1} alt="gear" className="icon-s" /> edit profile</a></p>
                    </div>
                </div>
        );
    }
}

export default UserCard;