"use client";

import useEventStore from "@/store/events/useEventStore";

export default function ApiEventImporter() {
    const apiEvents = useEventStore(
        (state) => state.apiEvents
    );

    const apiLoading = useEventStore(
        (state) => state.apiLoading
    );

    const apiError = useEventStore(
        (state) => state.apiError
    );

    const fetchApiEvents = useEventStore(
        (state) => state.fetchApiEvents
    );

    const importApiEvents = useEventStore(
        (state) => state.importApiEvents
    );

    return (
        <div className="border rounded-xl p-5 space-y-4">

            <h2 className="text-xl font-bold">
                Import Events from API
            </h2>

            <button
                onClick={fetchApiEvents}
                disabled={apiLoading}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg disabled:opacity-50"
            >
                {apiLoading ? "Loading..." : "Fetch API Events"}
            </button>

            {apiError && (
                <p className="text-red-600">
                    {apiError}
                </p>
            )}

            {apiEvents.length > 0 && (
                <>
                    <p>
                        {apiEvents.length} sample events loaded.
                    </p>

                    <button
                        onClick={importApiEvents}
                        className="bg-green-600 text-white px-4 py-2 rounded-lg"
                    >
                        Import Events
                    </button>

                    <ul className="list-disc pl-5 space-y-2">
                        {apiEvents.map((event) => (
                            <li key={event.id}>
                                {event.title}
                            </li>
                        ))}
                    </ul>
                </>
            )}

        </div>
    );
}