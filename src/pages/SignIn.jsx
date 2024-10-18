import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';
const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (email === "admin@gmail.com" && password === "admin") {
            const user = {
                name: "Sunit Sen",
                email: "sunitsen50@gmail.com",
                city: "Sylhet",
                country: "Bangladesh",
                admin: false,
            };
            // Store user data and sign-in status in localStorage
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('isSignedIn', 'true');
            const isAdmin = user.admin ? "/dashboard/admin/profile" : "/dashboard/user/profile";
            navigate(isAdmin, { state: user });
        } else {
            // Handle invalid credentials

            toast.error('Invalid email or password');
            
        }
    };

    return (
        <div className="signin-container">
            <div className="signin-card">
                <h1>User SignIn</h1>
                <form onSubmit={handleSubmit} className="signin-form">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        className="signin-input"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        className="signin-input"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                    <button type="submit" className="signin-button">
                        SignIn
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
