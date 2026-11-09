"use client";

import { useState } from "react";
import useStudentStore from "@/store/useStudentStore";

export default function StudentManager() {
    // Read students from the store
    const students = useStudentStore(
        (state) => state.students
    );

    // Get store actions
    const addStudent = useStudentStore(
        (state) => state.addStudent
    );

    const updateStudent = useStudentStore(
        (state) => state.updateStudent
    );

    const removeStudent = useStudentStore(
        (state) => state.removeStudent
    );

    // Local form state
    const [name, setName] = useState("");
    const [marks, setMarks] = useState("");

    // Handle adding a student
    const handleAddStudent = (event) => {
        event.preventDefault();

        if (!name.trim() || marks === "") return;

        const studentMarks = Number(marks);

        if (!Number.isFinite(studentMarks) || studentMarks < 0) {
            return;
        }

        addStudent(name.trim(), studentMarks);

        setName("");
        setMarks("");
    };

    return (
        <div>
            <h1>Student Management System</h1>

            {/* Create Student */}
            <form onSubmit={handleAddStudent}>
                <input
                    type="text"
                    placeholder="Student Name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />

                <input
                    type="number"
                    placeholder="Student Marks"
                    value={marks}
                    onChange={(event) => setMarks(event.target.value)}
                />

                <button type="submit">Add Student</button>
            </form>

            {/* Read Students */}
            <h2>Students List</h2>

            {students.map((student) => (
                <div key={student.id}>
                    <h3>{student.name}</h3>
                    <p>Marks: {student.marks}</p>

                    {/* Update Student */}
                    <button
                        onClick={() =>
                            updateStudent(student.id, {
                                marks: student.marks + 5,
                            })
                        }
                    >
                        Add 5 Marks
                    </button>

                    {/* Delete Student */}
                    <button
                        onClick={() => removeStudent(student.id)}
                    >
                        Remove Student
                    </button>
                </div>
            ))}
        </div>
    );
}