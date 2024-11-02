// components/StudentForm.js
"use client";

import { useState } from "react";

export default function StudentForm({ onAddStudent }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [grade, setGrade] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!firstName.trim()) newErrors.firstName = "First name is required";
    if (!lastName.trim()) newErrors.lastName = "Last name is required";
    if (!dob) newErrors.dob = "Date of birth is required";
    if (!grade || isNaN(grade) || grade < 1 || grade > 12) {
      newErrors.grade = "Grade must be a number between 1 and 12";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const newStudent = { firstName, lastName, dob, grade };
    onAddStudent(newStudent);

    // Clear the form fields
    setFirstName("");
    setLastName("");
    setDob("");
    setGrade("");
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "1rem", border: "1px solid #ddd", marginBottom: "1rem", borderRadius: "5px", maxWidth: "400px", margin: "auto", backgroundColor: "#f9f9f9" }}>
      <h3 style={{ textAlign: "center", color: "#333" }}>Add New Student</h3>
      <div style={{ marginBottom: "1rem" }}>
        <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold", fontSize: "1.1rem", color: "#333" }}>First Name:</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc", color: "#333", fontSize: "1rem" }}
        />
        {errors.firstName && <p style={{ color: "red" }}>{errors.firstName}</p>}
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold", fontSize: "1.1rem", color: "#333" }}>Last Name:</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc", color: "#333", fontSize: "1rem" }}
        />
        {errors.lastName && <p style={{ color: "red" }}>{errors.lastName}</p>}
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold", fontSize: "1.1rem", color: "#333" }}>Date of Birth:</label>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc", color: "#333", fontSize: "1rem" }}
        />
        {errors.dob && <p style={{ color: "red" }}>{errors.dob}</p>}
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold", fontSize: "1.1rem", color: "#333" }}>Grade:</label>
        <input
          type="number"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc", color: "#333", fontSize: "1rem" }}
        />
        {errors.grade && <p style={{ color: "red" }}>{errors.grade}</p>}
      </div>
      <button type="submit" style={{ width: "100%", padding: "0.75rem", backgroundColor: "#0070f3", color: "white", borderRadius: "4px", border: "none", fontWeight: "bold", cursor: "pointer" }}>
        Add Student
      </button>
    </form>
  );
}
