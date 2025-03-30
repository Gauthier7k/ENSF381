import React, { useEffect } from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import courses from "../data/courses.js";
import testimonials from "../data/testimonials.js"
import image from "../images/course1.jpg"
import './styles.css'

function MainSection() {
    var course1 = courses[0];
    var course2 = courses[1];
    var course3 = courses[2];

    var testid1 = Math.floor(Math.random() * testimonials.length);
    var testid2 = Math.floor(Math.random() * testimonials.length);
    while (testid2 === testid1) {
        testid2 = Math.floor(Math.random() * testimonials.length);
    }
    
    const testimonial1 = testimonials[testid1];
    const testimonial2 = testimonials[testid2];

    function starRating(rating) {
        if (rating == 5) {
            return "★★★★★";
        }
        else if (rating == 4) {
            return "★★★★☆";
        }
        else if (rating == 3) {
            return "★★★☆☆";
        }
        else if (rating == 2) {
            return "★★☆☆☆";
        }
        else if (rating == 1) {
            return "★☆☆☆☆";
        }
        else {
            return "☆☆☆☆☆";
        }
    }

    return(
        <main>
            <h2>About LMS</h2>
            <p>The Learning Management System (LMS) helps students and instructors manage courses.</p>
            <h3>Key Features:</h3>
            <div>
                <p>- View courses</p>
                <p>- Enroll in courses</p>
                <p>- Drop courses</p>
            </div>

            <hr />
            <h2>Featured Courses</h2>
            <table className="featuredCourses"> 
                <tr>
                    <td width="50%" rowSpan="4">{<img src={image} width="300px" />}</td>
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
                    <td width="50%" rowSpan="4">{<img src={image} width="300px" />}</td>
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
            <u> {testimonial1["courseName"]} </u>
            <br />
            "{testimonial1["review"]}"
            <br />
            - {testimonial1["studentName"]}
            <br />
            Rating: {starRating(testimonial1["rating"])}

            <br /><br />
            <u> {testimonial2["courseName"]} </u>
            <br />
            "{testimonial2["review"]}"
            <br />
            - {testimonial2["studentName"]}
            <br />
            Rating: {starRating(testimonial2["rating"])}
        </main>
    );
}

function Homepage() {
    return(
        <div>
            <Header />
            <MainSection />
            <Footer />
        </div>
    );
}

export default Homepage;