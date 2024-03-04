import React, { useState } from 'react';
import '../assets/style.css';

const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { username, email, password };
        console.log("Welcome", newUser);
        setHasBeenSubmitted(true);
    };

    const formMessage = () => {
        if (hasBeenSubmitted) {
            return "Thank you for submitting the form!";
        } else {
            return "Welcome, please submit the form";
        }
    };

    return (
        <form onSubmit={createUser} className="form-container">
            <h3>{formMessage()}</h3>
            <div className="form-group">
                <label>Username: </label>
                <input type="text" onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Email Address: </label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} /> {/* Cambiado a tipo email */}
            </div>
            <div className="form-group">
                <label>Password: </label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} /> {/* Cambiado a tipo password */}
            </div>
            <input type="submit" value="Create User" className="submit-button" />
        </form>
    );
};

export default UserForm;