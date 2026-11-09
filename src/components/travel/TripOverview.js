"use client";

import useTripStore from "@/store/travel/useTripStore";

export default function TripOverview() {
    const destination = useTripStore(
        (state) => state.destination
    );

    const startDate = useTripStore(
        (state) => state.startDate
    );

    const endDate = useTripStore(
        (state) => state.endDate
    );

    const updateDestination = useTripStore(
        (state) => state.updateDestination
    );

    return (
        <section className="rounded-lg border p-5">
            <h2 className="text-xl font-bold">
                Trip Overview
            </h2>

            <p>Destination: {destination}</p>
            <p>Start Date: {startDate}</p>
            <p>End Date: {endDate}</p>

            <button
                onClick={() =>
                    updateDestination("Japan")
                }
                className="mt-4 rounded bg-blue-600 px-4 py-2 text-white"
            >
                Change Destination to Japan
            </button>
        </section>
    );
}