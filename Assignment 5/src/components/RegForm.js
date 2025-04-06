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

  async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await response.json();

      const fetchedUsernames = [];
      const fetchedPasswords = [];

      users.forEach(user => {
        fetchedUsernames.push(user.username);
        fetchedPasswords.push(user.email); 
      });

      setUsernames(fetchedUsernames);
      setPasswords(fetchedPasswords);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }

  useEffect(() => {fetchData();}, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
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

    if (password.length < 8) {
      setMessage('Password must be at least 8 characters.');
      setMessageType('error');
      return;
    }

    const i = usernames.indexOf(username);
    if (passwords[i] === password) {
      setMessage('Login successful!');
      setMessageType('success');
      setTimeout(() => {
        window.location.href = '/CoursesPage';
      }, 2000);
    } else {
      setMessage('Invalid username or password.');
      setMessageType('error');
    }
  };

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
            <input type="password" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email"/>
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
