import React, { useEffect, useState } from "react";
import CourseItem from "./CourseItem";
import courses from "../data/courses.js";
import "./styles.css";

function CourseCatalog({ onEnroll }) {
  const [course, setCourses] = useState([]);
  useEffect(
          () => {
          fetch('http://localhost:5000/courses')
          .then(response => response.json())
          .then(data => setCourses(data))
          .catch(error => console.error("Error fetching courses:", error));
      }, []
  );

  return (
    <div className="courseCatalog">
      {courses.map((course) => (
        <CourseItem key={course.id} course={course} onEnroll={onEnroll} />
      ))}
    </div>
  );
}

export default CourseCatalog;