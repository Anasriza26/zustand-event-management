"use client";

import useCounterStore from "../store/useCounterStore";

export default function Navbar() {

    // Get cart count from Zustand store
    const count = useCounterStore((state) => state.count);

    return (
        <nav>
            <h2>My Shopping App</h2>

            <p>Cart Count: {count}</p>
        </nav>
    );
}