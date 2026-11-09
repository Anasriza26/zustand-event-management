"use client";

import useStudentStore from "@/store/useStudentStore";

export default function StudentList() {
    const students = useStudentStore(
        (state) => state.students
    );

    return (
        <div>
            <h2>Students List</h2>

            {students.map((student) => (
                <div key={student.id}>
                    <h3>{student.name}</h3>
                    <p>Marks: {student.marks}</p>
                </div>
            ))}
        </div>
    );
}