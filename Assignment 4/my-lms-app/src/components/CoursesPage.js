import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";

function CoursesPage() {
    return(
        <div className="courses-page">
            <Header />
            <div className="content">
               <CourseCatalog />
               <EnrollmentList />
            </div>
            <Footer />
        </ div>
        
    );
}

export default CoursesPage;