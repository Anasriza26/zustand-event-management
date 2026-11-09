
import { create } from "zustand";

import {
    persist,
    devtools,
    createJSONStorage
} from "zustand/middleware";

const useEventStore = create(
    devtools(
        persist(
            (set) => ({
                // Main event data
                events: [
                    {
                        id: 1,
                        title: "Web Development Workshop",
                        category: "Technology",
                        date: "2026-12-15",
                        capacity: 100,
                        bookedSeats: 35,
                        status: "Upcoming"
                    },
                    {
                        id: 2,
                        title: "Business Leadership Seminar",
                        category: "Business",
                        date: "2026-12-20",
                        capacity: 80,
                        bookedSeats: 50,
                        status: "Upcoming"
                    },
                    {
                        id: 3,
                        title: "Photography Exhibition",
                        category: "Art",
                        date: "2026-12-25",
                        capacity: 60,
                        bookedSeats: 20,
                        status: "Upcoming"
                    }
                ],

                // API event states
                apiEvents: [],
                apiLoading: false,
                apiError: null,

                // Hydration state
                hasHydrated: false,

                setHasHydrated: (value) =>
                    set({ hasHydrated: value }),

                // Create event
                addEvent: (eventData) =>
                    set((state) => ({
                        events: [
                            ...state.events,
                            {
                                ...eventData,
                                id: Date.now(),
                                bookedSeats: 0,
                                status: "Upcoming"
                            }
                        ]
                    })),

                // Update event
                updateEvent: (id, updatedData) =>
                    set((state) => ({
                        events: state.events.map((event) =>
                            event.id === id
                                ? { ...event, ...updatedData }
                                : event
                        )
                    })),

                // Delete event
                deleteEvent: (id) =>
                    set((state) => ({
                        events: state.events.filter(
                            (event) => event.id !== id
                        )
                    })),

                // Book a seat
                bookSeat: (id) =>
                    set((state) => ({
                        events: state.events.map((event) =>
                            event.id === id &&
                                event.bookedSeats < event.capacity
                                ? {
                                    ...event,
                                    bookedSeats: event.bookedSeats + 1
                                }
                                : event
                        )
                    })),

                // Cancel a booking
                cancelBooking: (id) =>
                    set((state) => ({
                        events: state.events.map((event) =>
                            event.id === id && event.bookedSeats > 0
                                ? {
                                    ...event,
                                    bookedSeats: event.bookedSeats - 1
                                }
                                : event
                        )
                    })),

                // Fetch sample events from API
                fetchApiEvents: async () => {
                    set({
                        apiLoading: true,
                        apiError: null
                    });

                    try {
                        const response = await fetch(
                            "https://dummyjson.com/posts?limit=10"
                        );

                        if (!response.ok) {
                            throw new Error("Failed to fetch API events");
                        }

                        const data = await response.json();

                        const formattedEvents = data.posts.map((post) => ({
                            id: `api-${post.id}`,
                            title: post.title,
                            category: "Education",
                            date: "2026-12-30",
                            capacity: 50,
                            bookedSeats: 0,
                            status: "Upcoming"
                        }));

                        set({
                            apiEvents: formattedEvents,
                            apiLoading: false
                        });

                    } catch (error) {
                        set({
                            apiError: error.message || "Something went wrong",
                            apiLoading: false
                        });
                    }
                },

                // Import API events into main event list
                importApiEvents: () =>
                    set((state) => {
                        const existingIds = new Set(
                            state.events.map((event) => event.id)
                        );

                        const newEvents = state.apiEvents.filter(
                            (event) => !existingIds.has(event.id)
                        );

                        return {
                            events: [
                                ...state.events,
                                ...newEvents
                            ]
                        };
                    })
            }),

            {
                // Local Storage key
                name: "event-management-storage",

                // Storage configuration
                storage: createJSONStorage(() => localStorage),

                // Prevent automatic hydration in Next.js
                skipHydration: true,

                // Save only the main events array
                partialize: (state) => ({
                    events: state.events
                }),

                // Detect hydration completion
                onRehydrateStorage: () => (state, error) => {
                    if (error) {
                        console.error("Hydration error:", error);
                    }

                    state?.setHasHydrated(true);
                }
            }
        ),

        {
            // Redux DevTools name
            name: "Event Management Store"
        }
    )
);

export default useEventStore;
