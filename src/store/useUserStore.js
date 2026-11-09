import { create } from "zustand";

// Create a user store
const useUserStore = create((set) => ({
    // Store state
    users: [],
    loading: false,
    error: null,

    // Fetch users from API
    fetchUsers: async () => {
        try {
            // Start loading
            set({
                loading: true,
                error: null,
            });

            // Fetch data from API
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );

            // Check API response
            if (!response.ok) {
                throw new Error("Failed to fetch users");
            }

            // Convert response to JSON
            const data = await response.json();

            // Save users in store
            set({
                users: data,
                loading: false,
            });
        } catch (error) {
            // Handle errors
            set({
                error: error.message,
                loading: false,
            });
        }
    },
}));

export default useUserStore;