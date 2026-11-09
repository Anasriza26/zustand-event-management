"use client";

import useCourseStore from "@/store/courses/useCourseStore";

export default function CourseSummary() {
    const totalCourses = useCourseStore(
        (state) => state.courses.length
    );

    return (
        <div className="p-4 bg-gray-600 rounded-lg">
            <h2 className="font-bold">
                Course Summary
            </h2>

            <p>Total Courses: {totalCourses}</p>
        </div>
    );
}