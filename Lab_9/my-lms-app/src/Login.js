import React, { useState } from "react";
import "./App.css";

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

async function handleSubmit(event) {
    event.preventDefault();

    const backendEndpoint = 'http://127.0.0.1:5000/validate_login';
    try {
        const response = await fetch(backendEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'username': username, 'password': password}),
        });

        const data = await response.json();

        if (response.ok) {
            console.log('SUCCESS');
        } else {
            console.error("ERROR");
        }
    } catch (error) {
        console.error("Error", error);
    }
    
};


function Login() {
    return(
        <div className="flexBox">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="flexItem">
                    <label for="username"><h2>Username:</h2></label>
                    <br />
                    <input onChange={(e) => setUsername(e.target.value)} type="text" id="username" name="username" required ></input>
                </div>
                <div className="flexItem">
                    <label for="password"><h2>Password:</h2></label>
                    <br />
                    <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" required></input>
                </div>
                <button type="submit" className="submit">Login</button>
            </form>
        </div>
    );
}

export default Login