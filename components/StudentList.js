/// components/StudentList.js
"use client";

export default function StudentList({ students }) {
  return (
    <div style={{ padding: "1rem" }}>
      <h2>Student List</h2>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            <strong>{student.firstName} {student.lastName}</strong> - Grade: {student.grade}, Date of Birth: {student.dob}
          </li>
        ))}
      </ul>
    </div>
  );
}
