
import { describe, it, expect, beforeEach } from "vitest";

import useEventStore from "./useEventStore";

describe("Event Store Testing", () => {

    // Reset the store before every test
    beforeEach(() => {
        useEventStore.setState({
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
            ]
        });
    });

    // Test 1: Initial event count
    it("should contain 3 initial events", () => {

        const events = useEventStore.getState().events;

        expect(events).toHaveLength(3);

    });

    // Test 2: Add a new event
    it("should add a new event", () => {

        useEventStore.getState().addEvent({
            title: "AI Development Workshop",
            category: "Technology",
            date: "2026-12-30",
            capacity: 50
        });

        const events = useEventStore.getState().events;

        expect(events).toHaveLength(4);

    });

    // Test 3: Delete an event
    it("should delete an event", () => {

        useEventStore.getState().deleteEvent(1);

        const events = useEventStore.getState().events;

        expect(events).toHaveLength(2);

        expect(
            events.find((event) => event.id === 1)
        ).toBeUndefined();

    });

    // Test 4: Book a seat
    it("should increase booked seats by one", () => {

        useEventStore.getState().bookSeat(1);

        const event = useEventStore.getState().events.find(
            (event) => event.id === 1
        );

        expect(event.bookedSeats).toBe(36);

    });

    // Test 5: Cancel a booking
    it("should decrease booked seats by one", () => {

        useEventStore.getState().cancelBooking(1);

        const event = useEventStore.getState().events.find(
            (event) => event.id === 1
        );

        expect(event.bookedSeats).toBe(34);

    });

    // Test 6: Prevent booking when capacity is full
    it("should not book a seat when capacity is full", () => {

        useEventStore.setState((state) => ({
            events: state.events.map((event) =>
                event.id === 1
                    ? {
                        ...event,
                        bookedSeats: 100
                    }
                    : event
            )
        }));

        useEventStore.getState().bookSeat(1);

        const event = useEventStore.getState().events.find(
            (event) => event.id === 1
        );

        expect(event.bookedSeats).toBe(100);

    });


    // Test 7: Update an event
    it("should update an existing event", () => {

        useEventStore.getState().updateEvent(1, {
            title: "Advanced React Workshop"
        });

        const event = useEventStore.getState().events.find(
            (event) => event.id === 1
        );

        expect(event.title).toBe("Advanced React Workshop");

    });

    // Test 8: Prevent cancellation when no bookings exist
    it("should not cancel when booked seats are zero", () => {

        useEventStore.setState((state) => ({
            events: state.events.map((event) =>
                event.id === 1
                    ? { ...event, bookedSeats: 0 }
                    : event
            )
        }));

        useEventStore.getState().cancelBooking(1);

        const event = useEventStore.getState().events.find(
            (event) => event.id === 1
        );

        expect(event.bookedSeats).toBe(0);

    });

    // Test 9: Invalid event ID
    it("should not change events for an invalid ID", () => {

        useEventStore.getState().bookSeat(999);

        const events = useEventStore.getState().events;

        expect(events).toHaveLength(3);

        expect(
            events.find((event) => event.id === 999)
        ).toBeUndefined();

    });

    // Test 10: Delete an invalid event ID
    it("should not delete any event when ID does not exist", () => {

        useEventStore.getState().deleteEvent(999);

        const events = useEventStore.getState().events;

        expect(events).toHaveLength(3);

    });

    // Test 11: Book multiple seats
    it("should increase booked seats correctly for multiple bookings", () => {

        const store = useEventStore.getState();

        store.bookSeat(1);
        store.bookSeat(1);
        store.bookSeat(1);

        const event = useEventStore.getState().events.find(
            (event) => event.id === 1
        );

        expect(event.bookedSeats).toBe(38);

    });

});
