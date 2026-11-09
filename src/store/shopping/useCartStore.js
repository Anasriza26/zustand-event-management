import { create } from "zustand";

const useCartStore = create((set) => ({
    // Original State
    cartItems: [
        {
            id: 1,
            name: "Keyboard",
            price: 5000,
            quantity: 2,
        },
        {
            id: 2,
            name: "Mouse",
            price: 2000,
            quantity: 1,
        },
        {
            id: 3,
            name: "Headset",
            price: 3000,
            quantity: 2,
        },
    ],

    // Actions
    increaseQuantity: (id) =>
        set((state) => ({
            cartItems: state.cartItems.map((item) =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ),
        })),

    decreaseQuantity: (id) =>
        set((state) => ({
            cartItems: state.cartItems.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        quantity: Math.max(1, item.quantity - 1),
                    }
                    : item
            ),
        })),
}));

export default useCartStore;