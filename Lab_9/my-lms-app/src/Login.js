import React from "react";
import "./App.css";

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
            <form>
                <div className="flexItem">
                    <label for="username"><h2>Username:</h2></label>
                    <br />
                    <input type="text" id="username" name="username" required></input>
                </div>
                <div className="flexItem">
                    <label for="password"><h2>Password:</h2></label>
                    <br />
                    <input type="password" id="password" name="password" required></input>
                </div>
            </form>
            <button type="submit" className="submit">Login</button>
        </div>
    );
}

export default Login