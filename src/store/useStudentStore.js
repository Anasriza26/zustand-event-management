import { create } from "zustand";

// Create a student store
const useStudentStore = create((set) => ({
    // Store state
    students: [
        { id: 1, name: "Abubakkar", marks: 50 },
        { id: 2, name: "Ahmed", marks: 70 },
        { id: 3, name: "Ibrahim", marks: 80 },
    ],

    // CREATE: Add a new student
    addStudent: (name, marks) =>
        set((state) => ({
            students: [
                ...state.students,
                {
                    id: Date.now(),
                    name,
                    marks,
                },
            ],
        })),

    // READ: Read students
    // We can access students directly using a selector.

    // UPDATE: Update student details
    updateStudent: (id, updatedData) =>
        set((state) => ({
            students: state.students.map((student) =>
                student.id === id
                    ? { ...student, ...updatedData }
                    : student
            ),
        })),

    // DELETE: Remove a student
    removeStudent: (id) =>
        set((state) => ({
            students: state.students.filter(
                (student) => student.id !== id
            ),
        })),
}));

export default useStudentStore;