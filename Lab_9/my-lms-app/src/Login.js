import React, { useState } from "react";
import "./App.css";
import {BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import predict from "./HousePricePredictor"

<BrowserRouter>
    <Routes>
        <Route path="/HousePricePredictor" element={<predict />}/>
    </Routes>
</BrowserRouter>

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    var data;

    function handleSubmit(event) {
        event.preventDefault();
        fetch(
            'http://127.0.0.1:5000/validate_login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({'username': username, 'password': password}),
            }
        )
    
        .then ((response) => {
            return response.json();
                
        })

        .then((data) => {
            if (data.success === true) {
            navigate('/HousePricePredictor')
            } else {
            setMessage("Incorrect username and/or password!");
        }})

        .catch(error=>(setMessage("An error occurred during data fetch!")));
    };

    return(
        <div className="flexBox">
            <h1>Login</h1>
            <form>
                <div >
                    <label for="username"><h2>Username:</h2></label>
                    <input onChange={(e) => setUsername(e.target.value)} type="text" id="username" name="username" className="flexItem" required ></input>
                </div>
                <div>
                    <label for="password"><h2>Password:</h2></label>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" className="flexItem" required></input>
                </div>
                <br />
                <button className="submit" onClick={handleSubmit}>Login</button>
            </form>
            <p className="message">{message}</p>
        </div>
    );
}

export default Login;