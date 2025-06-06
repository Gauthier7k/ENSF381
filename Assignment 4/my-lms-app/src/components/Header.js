import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from "../images/logo.jpg";
import "./styles.css";
import Homepage from "./Homepage.js";
import CoursesPage from "./CoursesPage.js";
import LoginPage from "./LoginPage.js";

function Header() {
    <BrowserRouter>
        <Routes>
            <Route path="/Homepage" element={<Homepage />} />
            <Route path="/CoursesPage" element={<CoursesPage />} />
            <Route path="/LoginPage" element={<LoginPage />} />
        </Routes>
    </BrowserRouter>
    return (
        <div>
            <header>
                <img src={logo} width="100px" height="100px" />
                <h1>LMS - Learning Management System</h1>
            </header>
            <nav>
                <a href="/Homepage">Home</a>
                <a href="/CoursesPage">Courses</a>
                <a href="/LoginPage">Login</a>
            </nav>
        </div>
    );
}

export default Header;