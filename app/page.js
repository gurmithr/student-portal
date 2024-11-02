// app/page.js
"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import StudentList from "../components/StudentList";
import StudentForm from "../components/StudentForm";
import Footer from "../components/Footer";

export default function Home() {
  const [students, setStudents] = useState([
    { firstName: "Aarav", lastName: "Sharma", dob: "2005-05-10", grade: "10" },
    { firstName: "Ishita", lastName: "Mehta", dob: "2006-09-12", grade: "9" },
    { firstName: "Rohan", lastName: "Patel", dob: "2004-02-15", grade: "11" },
    { firstName: "Simran", lastName: "Kaur", dob: "2007-07-20", grade: "8" },
    { firstName: "Priya", lastName: "Nair", dob: "2005-11-25", grade: "10" }
  ]);

  const addStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  return (
    <div>
      <Navbar />
      <StudentForm onAddStudent={addStudent} />
      <StudentList students={students} />
      <Footer />
    </div>
  );
}
