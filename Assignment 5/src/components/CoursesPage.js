import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CourseCatalog from "./CourseCatalog";
import EnrollmentList from "./EnrollmentList";

function CoursesPage() {
  const [enrollments, setEnrollments] = useState(() => {const stored = localStorage.getItem("enrollments");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {localStorage.setItem("enrollments", JSON.stringify(enrollments));}, [enrollments]);
  const handleEnroll = (course) => {
    setEnrollments((prev) => {
      const exists = prev.find((item) => item.id === course.id);
      if (exists) {
        return prev;
      } else {
        return [...prev, { ...course, count: 1 }];
      }
    });
  };
    const handleDrop = (courseId) => setEnrollments((prev) => prev.filter((course) => course.id !== courseId));

  return (
    <div>
      <Header className="courses-page"/>
      <div className="content">
        <CourseCatalog onEnroll={handleEnroll} />
        <EnrollmentList enrollments={enrollments} onDrop={handleDrop} />
      </div>
      <Footer />
    </div>
  );
}

export default CoursesPage;