"use client";

import useCounterStore from "../store/useCounterStore";

export default function Counter() {

    // Get state and actions from Zustand store
    const count = useCounterStore((state) => state.count);

    const increase = useCounterStore((state) => state.increase);

    const decrease = useCounterStore((state) => state.decrease);

    const reset = useCounterStore((state) => state.reset);

    return (
        <div>
            <h2>Counter Component</h2>

            <h3>Count: {count}</h3>

            <button onClick={increase}>Increase</button>

            <button onClick={decrease}>Decrease</button>

            <button onClick={reset}>Reset</button>
        </div>
    );
}