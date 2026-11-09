import { create } from "zustand";

const useCourseStore = create((set) => ({
    courses: [
        {
            id: 1,
            title: "React Fundamentals",
            price: 5000
        },
        {
            id: 2,
            title: "Node.js Backend",
            price: 7500
        }
    ],

    addCourse: (title, price) =>
        set((state) => ({
            courses: [
                ...state.courses,
                {
                    id: Date.now(),
                    title,
                    price
                }
            ]
        })),

    removeCourse: (id) =>
        set((state) => ({
            courses: state.courses.filter(
                (course) => course.id !== id
            )
        }))
}));

export default useCourseStore;