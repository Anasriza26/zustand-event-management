"use client";

import useEventStore from "@/store/events/useEventStore";
import EventCard from "./EventCard";

export default function EventList({ events, onEdit, onDelete }) {

    const bookSeat = useEventStore((state) => state.bookSeat);
    const cancelBooking = useEventStore((state) => state.cancelBooking);

    if (events.length === 0) {
        return (
            <p className="text-gray-500 border rounded-xl p-6">
                No matching events found.
            </p>
        );
    }

    return (
        <div className="space-y-4">

            <h2 className="text-2xl font-bold">
                All Events ({events.length})
            </h2>

            {events.map((event) => (
                <EventCard
                    key={event.id}
                    event={event}
                    onBook={bookSeat}
                    onCancelBooking={cancelBooking}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}

        </div>
    );
}