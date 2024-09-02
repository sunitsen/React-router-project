import { useState } from "react";
import {useNavigate } from "react-router-dom";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate ();
    const handleSubmit = (event) => {
        event.preventDefault();
        if(email === "admin@gmail.com" && password === "admin"){
           const user = {
            name: "sunit sen",
            email: "sunitsen50@gmail.com",
            city: "sylhet",
            country: 'Bangladesh'
           };
            navigate("/profile",{state: user})
        }else{
            navigate("/signin")
        }
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

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
                        onChange={handleEmailChange}
                    />
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        className="signin-input"
                        onChange={handlePasswordChange}
                    />
                    <button type="submit" className="signin-button">
                        SignIn
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SignIn;
