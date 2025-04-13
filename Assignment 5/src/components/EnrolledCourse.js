import React, { useEffect, useState } from "react";
import courseImage from "../images/course1.jpg";
import './styles.css'


function EnrolledCourse({ course, onDrop }) {
  const [id, setID] = useState(() => {const stored = localStorage.getItem("id");
      return stored ? JSON.parse(stored) : [];
    });
  const [studentCourse, setStudentCourse] = useState([]);
  useEffect(() => localStorage.setItem("id", id+1), []);
  const backendPoint = 'http://localhost:3000/student_courses/' + id;
  useEffect(
    () => {
    fetch(backendPoint)
    .then(response => response.json())
    .then(data => setStudentCourse(data))
    .catch(error => console.error("Error fetching courses:", error));
}, []
);
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