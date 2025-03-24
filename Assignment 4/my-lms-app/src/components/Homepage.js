import React, { useEffect, useState } from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import courses from "../data/courses.js";
import testimonials from "../data/testimonials.js"
import image from "../images/course1.jpg"

function MainSection() {
    var course1 = courses[0];
    var course2 = courses[1];
    var course3 = courses[2];
    var num = 0;
    
    localStorage.setItem('num', num);
    //const [num, change] = useState(number);
    useEffect( () => {
            var num = (num + 1) % 4;
        }, []);

    var test1 = testimonials[num];
    console.log(num)

    return(
        <main>
            <h2 onLoad={MainSection}>About LMS</h2>
            <p>The Learning Management System (LMS) helps students and instructors manage courses.</p>
            <h3>Key Features:</h3>
            <div>
                <p>- View courses</p>
                <p>- Enroll in courses</p>
                <p>- Drop courses</p>
            </div>

            <hr />
            <h2>Featured Courses</h2>
            <table>
                <tr>
                    <td width="50%" rowSpan="4">{<img src={image} width="300px"/>}</td>
                    <td width="50%">Course Name: {course1["name"]}</td>
                </tr>
                <tr>
                    <td>Instructor: {course1["instructor"]}</td>
                </tr>
                <tr>
                    <td>Course Description: {course1["description"]}</td>
                </tr>
                <tr>
                    <td>Duration of Course: {course1["duration"]}</td>
                </tr>
                <tr><td><br /><br /></td></tr>
                <tr>
                    <td width="50%" rowSpan="4">{<img src={image} width="300px"/>}</td>
                    <td width="50%">Course Name: {course2["name"]}</td>
                </tr>
                <tr>
                    <td>Instructor: {course2["instructor"]}</td>
                </tr>
                <tr>
                    <td>Course Description: {course2["description"]}</td>
                </tr>
                <tr>
                    <td>Duration of Course: {course2["duration"]}</td>
                </tr>
                <tr><td><br /><br /></td></tr>
                <tr>
                    <td width="50%" rowSpan="4">{<img src={image} width="300px"/>}</td>
                    <td width="50%">Course Name: {course3["name"]}</td>
                </tr>
                <tr>
                    <td>Instructor: {course3["instructor"]}</td>
                </tr>
                <tr>
                    <td>Course Description: {course3["description"]}</td>
                </tr>
                <tr>
                    <td>Duration of Course: {course3["duration"]}</td>
                </tr>
            </table>
            
            <hr />
            <h2>Testimonials</h2>
            WORK IN PROGRESS
            
        </main>
    );
}

function Homepage() {
    return(
        <div>
            /* header issuses */
            <MainSection />
            <Footer />
        </div>
    );
}

export default Homepage;