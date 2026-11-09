"use client";

import { useState } from "react";
import usePackingStore from "@/store/travel/usePackingStore";

export default function PackingChecklist() {
    const [itemName, setItemName] = useState("");

    const items = usePackingStore(
        (state) => state.items
    );

    const addItem = usePackingStore(
        (state) => state.addItem
    );

    const togglePacked = usePackingStore(
        (state) => state.togglePacked
    );

    const removeItem = usePackingStore(
        (state) => state.removeItem
    );

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!itemName.trim()) return;

        addItem(itemName.trim());
        setItemName("");
    };

    return (
        <section className="rounded-lg border p-5">
            <h2 className="text-xl font-bold">
                Packing Checklist
            </h2>

            <form onSubmit={handleSubmit}>
                <input
                    value={itemName}
                    onChange={(event) =>
                        setItemName(event.target.value)
                    }
                    placeholder="Enter an item"
                    className="mr-2 rounded border p-2"
                />

                <button
                    type="submit"
                    className="rounded bg-green-600 px-4 py-2 text-white"
                >
                    Add
                </button>
            </form>

            <ul className="mt-4 space-y-3">
                {items.map((item) => (
                    <li
                        key={item.id}
                        className="flex items-center justify-between"
                    >
                        <span>
                            {item.name} -{" "}
                            {item.packed ? "Packed" : "Not Packed"}
                        </span>

                        <div className="flex gap-2">
                            <button
                                onClick={() =>
                                    togglePacked(item.id)
                                }
                            >
                                Toggle
                            </button>

                            <button
                                onClick={() =>
                                    removeItem(item.id)
                                }
                                className="text-red-600"
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}