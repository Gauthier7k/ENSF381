import React from "react";
import EnrolledCourse from "./EnrolledCourse";
import './styles.css';

const EnrollmentList = ({ enrollments, onDrop }) => {
  const totalCreditHours = enrollments.length *3;
  

  const enrollmentElements = [];
  for (let i = 0; i < enrollments.length; i++) {
    enrollmentElements.push(
      <EnrolledCourse key={enrollments[i].id} course={enrollments[i]} onDrop={onDrop} />
    );
  }

  return (
    <div>
      <h2>Enrolled Courses</h2>
      <div className="courseCatalog">
      {enrollments.length === 0 ? <p>No courses enrolled.</p> : enrollmentElements}
      </div>
      <h3>Total Credit Hours: {totalCreditHours}</h3>
    </div>
  );
};

export default EnrollmentList;