"use client";

import useCourseStore from "@/store/courses/useCourseStore";

export default function CourseList() {
    const courses = useCourseStore(
        (state) => state.courses
    );

    const addCourse = useCourseStore(
        (state) => state.addCourse
    );

    const removeCourse = useCourseStore(
        (state) => state.removeCourse
    );

    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-5">
                Available Courses
            </h1>

            <button
                onClick={() =>
                    addCourse("JavaScript Advanced", 6000)
                }
                className="bg-blue-600 text-white px-4 py-2 rounded mb-5"
            >
                Add Course
            </button>

            <div className="space-y-3">
                {courses.map((course) => (
                    <div
                        key={course.id}
                        className="border p-4 rounded-lg flex justify-between items-center"
                    >
                        <div>
                            <h2 className="font-bold">
                                {course.title}
                            </h2>

                            <p>Rs. {course.price}</p>
                        </div>

                        <button
                            onClick={() =>
                                removeCourse(course.id)
                            }
                            className="bg-red-600 text-white px-3 py-2 rounded"
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}