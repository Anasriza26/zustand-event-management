import { create } from "zustand";

// Create a reusable store factory
export const createLibraryStore = () =>
    create((set, get) => ({
        books: [
            {
                id: 1,
                title: "Atomic Habits",
                author: "James Clear",
            },
            {
                id: 2,
                title: "Deep Work",
                author: "Cal Newport",
            },
        ],

        // Add a new book
        addBook: (title, author) =>
            set((state) => ({
                books: [
                    ...state.books,
                    {
                        id: Date.now(),
                        title,
                        author,
                    },
                ],
            })),

        // Remove a book
        removeBook: (id) =>
            set((state) => ({
                books: state.books.filter(
                    (book) => book.id !== id
                ),
            })),

        // Get total book count
        getBookCount: () => get().books.length,
    }));

const useLibraryStore = createLibraryStore();

export default useLibraryStore;