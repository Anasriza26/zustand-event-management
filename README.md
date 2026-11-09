# Zustand Event Management System

A practical project built while learning **Zustand state management** with **Next.js**.

This project demonstrates how to manage global state in a React application using Zustand, with a real-world Event Booking Management System as the final project.

## Features

- **Event Management:** Create, read, update, and delete events.
- **Seat Booking:** Book and cancel event seats.
- **Search & Filtering:** Search events by title and filter by category and availability.
- **Dashboard Statistics:** Display total events, capacity, booked seats, available seats, and booking percentage.
- **Persist Middleware:** Save event data in browser local storage.
- **DevTools Middleware:** Debug and inspect Zustand state changes.
- **API Integration:** Fetch sample data from DummyJSON and import it into the event list.
- **Multiple Stores:** Organize application state using separate stores.
- **Selectors:** Access specific state values and improve component performance.
- **TypeScript:** Explore typed Zustand stores.
- **Testing:** Practice testing Zustand store actions with Vitest.

## Tech Stack

- Next.js
- React
- JavaScript
- Zustand
- Tailwind CSS
- Vitest
- DummyJSON API

## Project Structure

```text
src/
├── app/
│   ├── event-management/
│   ├── shopping-cart/
│   ├── expense-tracker/
│   ├── recipe-explorer/
│   ├── travel-planner/
│   └── ...
│
├── components/
│   └── events/
│       ├── EventDashboard.jsx
│       ├── EventForm.jsx
│       ├── EventCard.jsx
│       ├── EventList.jsx
│       ├── EventFilters.jsx
│       ├── EventStatistics.jsx
│       └── ApiEventImporter.jsx
│
├── store/
│   ├── events/
│   │   └── useEventStore.js
│   └── ...
│
└── test/
```

*The structure above highlights the main learning routes and event-management components.*

## Getting Started

### 1. Clone the repository

```bash
https://github.com/Anasriza26/zustand-event-management.git
```

### 2. Navigate to the project

```bash
cd zustand-event-management
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Run tests (optional)

```bash
npm run test:run
```

## Learning Goals

This project covers practical Zustand concepts:

- Creating Zustand stores
- Managing state and actions
- Updating arrays and objects immutably
- Sharing global state between components
- Using selectors and optimizing re-renders
- Persisting state with middleware
- Debugging with DevTools
- Handling asynchronous API requests
- Managing multiple stores
- Working with TypeScript
- Building a real-world application

## API Information

Sample API data is retrieved from [DummyJSON](https://dummyjson.com/).

The API posts are converted into sample event records for demonstration purposes. They are not real event listings.

## Project Purpose

This repository is part of my hands-on learning journey with Zustand and modern React state management.

The goal is to understand concepts through practical implementation and build maintainable applications.

---

**Built with Next.js, React & Zustand.**
