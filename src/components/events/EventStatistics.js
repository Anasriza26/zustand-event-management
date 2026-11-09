"use client";

export default function EventStatistics({ events }) {

    const totalEvents = events.length;

    const totalCapacity = events.reduce(
        (total, event) => total + event.capacity,
        0
    );

    const bookedSeats = events.reduce(
        (total, event) => total + event.bookedSeats,
        0
    );

    const availableSeats = totalCapacity - bookedSeats;

    const bookingPercentage = totalCapacity > 0
        ? Math.round((bookedSeats / totalCapacity) * 100)
        : 0;

    const statistics = [
        {
            title: "Total Events",
            value: totalEvents,
            color: "bg-blue-100"
        },
        {
            title: "Total Capacity",
            value: totalCapacity,
            color: "bg-purple-100"
        },
        {
            title: "Booked Seats",
            value: bookedSeats,
            color: "bg-green-100"
        },
        {
            title: "Available Seats",
            value: availableSeats,
            color: "bg-orange-100"
        }
    ];

    return (
        <div className="space-y-4">

            <h2 className="text-2xl font-bold">
                Dashboard Statistics
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 backdrop:blur-sm bg-gray-600 p-4 rounded-xl">

                {statistics.map((item) => (
                    <div
                        key={item.title}
                        className={`${item.color} rounded-xl p-5`}
                    >
                        <p className="text-gray-600">
                            {item.title}
                        </p>

                        <h3 className="text-3xl font-bold mt-2 text-gray-800">
                            {item.value}
                        </h3>
                    </div>
                ))}

            </div>

            <div className="border rounded-xl p-5">

                <div className="flex justify-between mb-3">
                    <h3 className="font-semibold">
                        Booking Progress
                    </h3>

                    <span className="font-bold">
                        {bookingPercentage}%
                    </span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                        className="bg-green-600 h-3 rounded-full"
                        style={{ width: `${bookingPercentage}%` }}
                    />
                </div>

            </div>

        </div>
    );
}