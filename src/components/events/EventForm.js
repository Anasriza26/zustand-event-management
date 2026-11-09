
"use client";

import { useState } from "react";

const initialForm = {
    title: "",
    category: "Technology",
    date: "",
    capacity: ""
};

export default function EventForm({
    editingEvent,
    onSave,
    onCancel
}) {
    const getFormData = (event) => event
        ? {
            title: event.title,
            category: event.category,
            date: event.date,
            capacity: String(event.capacity)
        }
        : initialForm;

    const [formData, setFormData] = useState(() => getFormData(editingEvent));
    const [previousEditingEvent, setPreviousEditingEvent] = useState(editingEvent);

    // Reset the draft when the selected event changes, before rendering children.
    if (previousEditingEvent !== editingEvent) {
        setPreviousEditingEvent(editingEvent);
        setFormData(getFormData(editingEvent));
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const capacity = Number(formData.capacity);

        if (
            !formData.title.trim() ||
            !formData.date ||
            !Number.isInteger(capacity) ||
            capacity <= 0
        ) {
            alert("Please enter valid event details.");
            return;
        }

        onSave({
            title: formData.title.trim(),
            category: formData.category,
            date: formData.date,
            capacity
        });

        if (!editingEvent) {
            setFormData(initialForm);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-gray-700 border rounded-xl shadow-sm p-6 space-y-4"
        >
            <h2 className="text-xl font-bold">
                {editingEvent ? "Update Event" : "Create New Event"}
            </h2>

            <div>
                <label className="block mb-1 font-medium">
                    Event Title
                </label>

                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Enter event title"
                    className="w-full border rounded-lg p-3"
                    required
                />
            </div>

            <div>
                <label className="block mb-1 font-medium">
                    Category
                </label>

                <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-3"
                >
                    <option value="Technology">Technology</option>
                    <option value="Business">Business</option>
                    <option value="Art">Art</option>
                    <option value="Education">Education</option>
                    <option value="Sports">Sports</option>
                </select>
            </div>

            <div>
                <label className="block mb-1 font-medium">
                    Event Date
                </label>

                <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-3"
                    required
                />
            </div>

            <div>
                <label className="block mb-1 font-medium">
                    Maximum Capacity
                </label>

                <input
                    type="number"
                    name="capacity"
                    value={formData.capacity}
                    onChange={handleChange}
                    placeholder="Enter maximum seats"
                    min="1"
                    step="1"
                    className="w-full border rounded-lg p-3"
                    required
                />
            </div>

            <div className="flex gap-3">
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700"
                >
                    {editingEvent ? "Save Changes" : "Add Event"}
                </button>

                {editingEvent && (
                    <button
                        type="button"
                        onClick={onCancel}
                        className="bg-gray-200 px-5 py-3 rounded-lg"
                    >
                        Cancel
                    </button>
                )}
            </div>
        </form>
    );
}
