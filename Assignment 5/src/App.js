import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage.js';
import CoursesPage from './components/CoursesPage.js';
import LoginPage from './components/LoginPage.js';
import SignUpPage from './components/SignUpPage.js';

function App() {
    return(
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/CoursesPage" element={<CoursesPage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/SignUpPage" element={<SignUpPage />} />
      </Routes>
  </BrowserRouter>);
}

export default App;