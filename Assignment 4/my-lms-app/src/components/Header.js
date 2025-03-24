import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from "../images/logo.jpg";
import "./styles.css";
import Homepage from "./Homepage.js";
import CoursesPage from "./CoursesPage.js";
import LoginForm from "./LoginForm.js";

function Header() {
    return (
        <div>
            <header>
                <img src={logo} width="100px" height="100px" />
                <h1>LMS - Learning Management System</h1>
            </header>

            <BrowserRouter>
                <Routes>
                    <Route path="/Homepage" element={<Homepage />} />
                    <Route path="/CoursesPage" element={<CoursesPage />} />
                    <Route path="/LoginForm" element={<LoginForm />} />
                </Routes>
            </BrowserRouter>

            <a href="/CoursesPage">Hello</a>
            <a href="/LoginForm">Hola</a>
            <a href="/Homepage">Smething</a>
        </div>
    );
}

export default Header;