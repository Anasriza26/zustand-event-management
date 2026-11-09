import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import EventCard from "./EventCard";

describe("EventCard Component Testing", () => {
  const mockEvent = {
    id: 1,
    title: "React Development Workshop",
    category: "Technology",
    date: "2026-12-15",
    capacity: 100,
    bookedSeats: 35,
    status: "Upcoming",
  };

  it("should display event title", () => {
    render(
      <EventCard
        event={mockEvent}
        onBook={() => {}}
        onCancelBooking={() => {}}
        onEdit={() => {}}
        onDelete={() => {}}
      />,
    );

    expect(screen.getByText("React Development Workshop")).toBeInTheDocument();
  });
});
