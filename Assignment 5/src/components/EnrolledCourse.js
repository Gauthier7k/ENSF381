import React from "react";
import courseImage from "../images/course1.jpg";
import './styles.css'


function EnrolledCourse({ course, onDrop }) {
  return (
    <div className="CourseItem">
      <img src={courseImage}/>
      <h4>{course.name}</h4>
      <p>
        Credit Hours: 3
      </p>
      <button onClick={() => onDrop(course.id)}>Drop Course</button>
    </div>
  );
}

export default EnrolledCourse;