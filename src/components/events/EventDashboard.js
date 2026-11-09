"use client";

import { useState, useEffect } from "react";

import useEventStore from "@/store/events/useEventStore";

import EventForm from "./EventForm";
import EventList from "./EventList";
import EventFilters from "./EventFilters";
import EventStatistics from "./EventStatistics";
import ApiEventImporter from "./ApiEventImporter";

export default function EventDashboard() {

    const [editingEvent, setEditingEvent] = useState(null);

    // Search and filter states
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [availabilityFilter, setAvailabilityFilter] = useState("All");

    // Zustand store
    const events = useEventStore((state) => state.events);

    const addEvent = useEventStore((state) => state.addEvent);
    const updateEvent = useEventStore((state) => state.updateEvent);
    const deleteEvent = useEventStore((state) => state.deleteEvent);

    // Add or update event
    const handleSave = (eventData) => {

        if (editingEvent) {
            updateEvent(editingEvent.id, eventData);
            setEditingEvent(null);
        } else {
            addEvent(eventData);
        }
    };

    // Delete event
    const handleDelete = (id) => {

        const confirmed = window.confirm(
            "Are you sure you want to delete this event?"
        );

        if (!confirmed) return;

        deleteEvent(id);

        if (editingEvent?.id === id) {
            setEditingEvent(null);
        }
    };

    // Search and filter events
    const filteredEvents = events.filter((event) => {

        const matchesSearch = event.title
            .toLowerCase()
            .includes(searchQuery.toLowerCase());

        const matchesCategory =
            selectedCategory === "All" ||
            event.category === selectedCategory;

        const matchesAvailability =
            availabilityFilter === "All" ||
            (availabilityFilter === "Available" &&
                event.bookedSeats < event.capacity) ||
            (availabilityFilter === "Full" &&
                event.bookedSeats >= event.capacity);

        return (
            matchesSearch &&
            matchesCategory &&
            matchesAvailability
        );
    });

    const hasHydrated = useEventStore(
        (state) => state.hasHydrated
    );

    useEffect(() => {
        useEventStore.persist.rehydrate();
    }, []);

    if (!hasHydrated) {
        return <p className="p-6">Loading saved events...</p>;
    }
    return (
        <main className="max-w-6xl mx-auto p-6 space-y-8">

            <h1 className="text-3xl font-bold">
                Event Booking Management
            </h1>

            {/* Dashboard Statistics */}
            <EventStatistics events={events} />

            <ApiEventImporter />


            {/* Event Form */}
            <EventForm
                editingEvent={editingEvent}
                onSave={handleSave}
                onCancel={() => setEditingEvent(null)}
            />

            {/* Search and Filters */}
            <EventFilters
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                availabilityFilter={availabilityFilter}
                setAvailabilityFilter={setAvailabilityFilter}
            />

            {/* Filtered Event List */}
            <EventList
                events={filteredEvents}
                onEdit={setEditingEvent}
                onDelete={handleDelete}
            />


        </main>
    );
}