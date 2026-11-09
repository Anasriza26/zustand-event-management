"use client";

import useStudentStore from "@/store/useStudentStore";

export default function StudentCount() {
    const count = useStudentStore(
        (state) => state.students.length
    );

    return (
        <div>
            <h2>Total Students: {count}</h2>
        </div>
    );
}