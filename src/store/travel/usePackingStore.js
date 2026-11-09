import { create } from "zustand";

const usePackingStore = create((set) => ({
    items: [
        { id: 1, name: "Passport", packed: false },
        { id: 2, name: "Clothes", packed: false },
        { id: 3, name: "Charger", packed: true },
    ],

    addItem: (itemName) =>
        set((state) => ({
            items: [
                ...state.items,
                {
                    id: Date.now(),
                    name: itemName,
                    packed: false,
                },
            ],
        })),

    togglePacked: (id) =>
        set((state) => ({
            items: state.items.map((item) =>
                item.id === id
                    ? { ...item, packed: !item.packed }
                    : item
            ),
        })),

    removeItem: (id) =>
        set((state) => ({
            items: state.items.filter(
                (item) => item.id !== id
            ),
        })),
}));

export default usePackingStore;