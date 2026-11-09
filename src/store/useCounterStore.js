
import { create } from "zustand";

// Create a counter store
const useCounterStore = create((set) => ({
    // Store state
    count: 10,

    // Increase counter value
    increase: () =>
        set((state) => ({
            count: state.count + 2,
        })),

    // Decrease counter value
    decrease: () =>
        set((state) => ({
            count: state.count - 2,
        })),

    // Reset counter value
    reset: () =>
        set({
            count: 10,
        }),
}));

export default useCounterStore;
