import React from "react";
import CourseItem from "./CourseItem";
import courses from "../data/courses.js";
import "./styles.css";

function CourseCatalog({ onEnroll }) {
  return (
    <div className="courseCatalog">
      {courses.map((course) => (
        <CourseItem key={course.id} course={course} onEnroll={onEnroll} />
      ))}
    </div>
  );
}

export default CourseCatalog;