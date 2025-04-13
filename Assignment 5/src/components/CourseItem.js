import React, { useState } from "react";
import courseImage from "../images/course2.jpg";
import './styles.css'

function CourseItem({ course, onEnroll }) {
  const [showDescription, setShowDescription] = React.useState(false);

  return (
    <div className="CourseItem" onMouseEnter={() => setShowDescription(true)} onMouseLeave={() => setShowDescription(false)}>
      <img src={courseImage} />
      <h3>{course.name}</h3>
      <p>Instructor: {course.instructor}</p>
      {showDescription && <p>{course.description}</p>}
      <button onClick={() => onEnroll(course)}>Enroll Now</button>
      
    </div>
  );
}

export default CourseItem;