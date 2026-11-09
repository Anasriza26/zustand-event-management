import { create } from "zustand";

let latestRequestId = 0;

const useRecipeStore = create((set) => ({
    // State
    recipes: [],
    loading: false,
    error: null,
    searchQuery: "",

    // Update search text
    setSearchQuery: (query) =>
        set({ searchQuery: query }),

    // Async Action
    fetchRecipes: async (query = "") => {
        const requestId = ++latestRequestId;

        set({
            loading: true,
            error: null,
        });

        try {
            const url = query.trim()
                ? `https://dummyjson.com/recipes/search?q=${encodeURIComponent(query)}`
                : "https://dummyjson.com/recipes";

            const response = await fetch(url);

            if (!response.ok) {
                throw new Error("Failed to fetch recipes");
            }

            const data = await response.json();

            // Ignore older requests
            if (requestId !== latestRequestId) return;

            set({
                recipes: data.recipes,
                loading: false,
            });
        } catch (error) {
            if (requestId !== latestRequestId) return;

            set({
                error: error.message || "Something went wrong",
                loading: false,
            });
        }
    },
}));

export default useRecipeStore;