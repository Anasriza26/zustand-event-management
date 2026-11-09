import { create } from "zustand";

const useTripStore = create((set) => ({
    destination: "Malaysia",
    startDate: "2026-12-10",
    endDate: "2026-12-15",

    updateDestination: (newDestination) =>
        set({
            destination: newDestination,
        }),

    updateStartDate: (newDate) =>
        set({
            startDate: newDate,
        }),

    updateEndDate: (newDate) =>
        set({
            endDate: newDate,
        }),
}));

export default useTripStore;