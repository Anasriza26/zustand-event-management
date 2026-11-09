import { describe, it, expect, beforeEach } from "vitest";
import { createLibraryStore } from "./useLibraryStore";

// Store instance for testing
let store;

// Create a fresh store before every test
beforeEach(() => {
    store = createLibraryStore();
});

describe("Library Store Tests", () => {

    it("should have 2 books initially", () => {
        expect(store.getState().books).toHaveLength(2);
    });

    it("should add a new book", () => {
        store.getState().addBook(
            "Clean Code",
            "Robert C. Martin"
        );

        expect(store.getState().books).toHaveLength(3);
    });

    it("should remove a book", () => {
        store.getState().removeBook(1);

        expect(store.getState().books).toHaveLength(1);
    });

    it("should return the correct book count", () => {
        expect(store.getState().getBookCount()).toBe(2);
    });

});