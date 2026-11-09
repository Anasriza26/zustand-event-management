
"use client";

export default function EventCard({
    event,
    onBook,
    onCancelBooking,
    onEdit,
    onDelete
}) {
    const seatsAvailable =
        event.capacity - event.bookedSeats;

    return (
        <div className="bg-gray-600 border rounded-xl p-5 shadow-sm">
            <div className="flex justify-between items-start gap-3">
                <div>
                    <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                        {event.category}
                    </span>

                    <h2 className="text-xl font-bold mt-3">
                        {event.title}
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Date: {event.date}
                    </p>
                </div>

                <span className="text-sm text-green-700 font-medium">
                    {event.status}
                </span>
            </div>

            <div className="mt-5 border-t pt-4">
                <p>
                    Booked Seats: {event.bookedSeats}
                </p>

                <p>
                    Available Seats: {seatsAvailable}
                </p>

                <p>
                    Total Capacity: {event.capacity}
                </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-5">
                <button
                    onClick={() => onBook(event.id)}
                    disabled={seatsAvailable === 0}
                    className="bg-green-600 text-white px-3 py-2 rounded-lg disabled:opacity-40"
                >
                    Book Seat
                </button>

                <button
                    onClick={() => onCancelBooking(event.id)}
                    disabled={event.bookedSeats === 0}
                >
                    Cancel Booking
                </button>
            </div>

            <div className="flex gap-2 mt-3">
                <button
                    onClick={() => onEdit(event)}
                    className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg"
                >
                    Edit
                </button>

                <button
                    onClick={() => onDelete(event.id)}
                    className="border border-red-600 text-red-600 px-4 py-2 rounded-lg"
                >
                    Delete
                </button>
            </div>
        </div>
    );
}
