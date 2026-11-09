"use client";

export default function EventFilters({
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    availabilityFilter,
    setAvailabilityFilter
}) {
    return (
        <div className="bg-gray-800 border rounded-xl p-5 space-y-4">

            <h2 className="text-xl font-bold">
                Search & Filter Events
            </h2>

            {/* Search */}
            <div>
                <label className="block mb-2 font-medium">
                    Search Event
                </label>

                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by event name..."
                    className="w-full border rounded-lg p-3"
                />
            </div>

            {/* Category Filter */}
            <div>
                <label className="block mb-2 font-medium">
                    Filter by Category
                </label>

                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full border rounded-lg p-3"
                >
                    <option value="All">All Categories</option>
                    <option value="Technology">Technology</option>
                    <option value="Business">Business</option>
                    <option value="Art">Art</option>
                    <option value="Education">Education</option>
                    <option value="Sports">Sports</option>
                </select>
            </div>

            {/* Availability Filter */}
            <div>
                <label className="block mb-2 font-medium">
                    Filter by Availability
                </label>

                <select
                    value={availabilityFilter}
                    onChange={(e) => setAvailabilityFilter(e.target.value)}
                    className="w-full border rounded-lg p-3"
                >
                    <option value="All">All Events</option>
                    <option value="Available">Available Seats</option>
                    <option value="Full">Fully Booked</option>
                </select>
            </div>

        </div>
    );
}