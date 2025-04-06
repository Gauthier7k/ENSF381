import React, { createContext, useState, useEffect } from 'react';
import AuthMessage from './AuthMessageSignUp';
import './styles.css';

export const AuthContext = createContext();

function RegForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');

  const [usernames, setUsernames] = useState([]);
  const [passwords, setPasswords] = useState([]);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  useEffect(() => {fetchData();}, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var alphabet = uppercase + lowercase;
    var digits = "0123456789";
    var specialUsername = " !@#$%^&*()=+[]{}|;:',.<>?/`~" + '"';
    var specialPassword = specialUsername + "-_";
    

    if (!username || !password || !email) {
      setMessage('Username, password, and email cannot be empty.');
      setMessageType('error');
      return;
    }

    if (username.length < 3 || username.length > 20) {
      setMessage('Username must be between 3 and 20 characters long.');
      setMessageType('error');
      return;
    }

    if (!alphabet.includes(username[0])) {
      setMessage('Username must start with a letter.');
      setMessageType('error');
      return;
    }

    for (let i = 1; i < username.length; i++) {
      if (username[i] == " ") {
        setMessage('Username cannot have a space.');
        setMessageType('error');
        return;
      }
      else if (specialUsername.includes(username[i])) {
        setMessage("Username cannot have any special characters except for hyphens (-) and underscores (_).");
        setMessageType('error');
        return;
      }
    }

    if (password.length < 8) {
      setMessage('Password must be at least 8 characters.');
      setMessageType('error');
      return;
    }

    if (password.includes(" ")) {
      setMessage('Password cannot have a space.');
      setMessageType('error');
      return;
    }

    let lowercaseFlag = false;
    let uppercaseFlag = false;
    let digitFlag = false;
    let specialFlag = false;
    for (let i = 0; i < password.length; i++) {
      if (lowercase.includes(password[i])) {
        lowercaseFlag = true;
      }
      if (uppercase.includes(password[i])) {
        uppercaseFlag = true;
      }
      if (digits.includes(password[i])) {
        digitFlag = true;
      }
      if (specialPassword.includes(password[i])) {
        specialFlag = true;
      }
    }

    if (!(lowercaseFlag && uppercaseFlag && digitFlag && specialFlag)) {
      setMessage('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
      setMessageType('error');
      return;
    }

    if (confirmPassword != password) {
      setMessage('Confirm password does not match password.');
      setMessageType('error');
      return;
    }

    if (email.includes(" ")) {
      setMessage('Email cannot have a space.');
      setMessageType('error');
      return;
    }

    if (!email.includes("@")) {
      setMessage('Email must have @ symbol.');
      setMessageType('error');
      return;
    }

    let emailArray = email.split("@");
    if (emailArray[0] != username) {
      setMessage('Email must be in the form username@example.com');
      setMessageType('error');
      return;
    }
    if (!(emailArray[1].includes(".com") || emailArray[1].includes(".net") || emailArray[1].includes(".io"))) {
      setMessage('Email must have one of the following domain names: .com, .net, .io');
      setMessageType('error');
      return;
    }
    
    let usernameUnique = fetchData();
    if (!usernameUnique) {
      setMessage('Username is already taken');
      setMessageType('error');
    }
    setTimeout(() => {
      window.location.href = '/LoginPage';
    }, 2000);

  };

  async function fetchData(event) {
    
    const backendEndpoint = "http://127.0.0.1:5000/register";

    try {
      const response = await fetch(backendEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({'username': username}, {'password': password}, {'email': email}),
      });

      const message = await response.json();
      if (response.ok) {
        
        if (message.message == 'Username is already taken') {
          return false;
        }
        return true;
      }

      else {
        console.error('Error in form submission.');
      }

    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }

  return (
    <AuthContext.Provider value={{ message, setMessage, messageType, setMessageType }}>
      <div className="loginForm">
        <form onSubmit={handleSubmit} className="login">
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter username"/>
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password"/>
          </div>
          <div>
            <label htmlFor="password">Confirm Password:</label>
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Enter password"/>
          </div>
          <div>
            <label htmlFor="password">Email:</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email"/>
          </div>
          <div className="buttonContainer">
            <button type="submit" className="signup-button">Sign Up</button>
          </div>
          <div className="link">
            <a href="/LoginPage">Already have an account? Login Here</a>
          </div>
        </form>
        <AuthMessage />
      </div>
    </AuthContext.Provider>
  );
}

export default RegForm;
