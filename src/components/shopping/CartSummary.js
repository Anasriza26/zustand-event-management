"use client";

import useCartStore from "@/store/shopping/useCartStore";

export default function CartSummary() {
    const cartItems = useCartStore(
        (state) => state.cartItems
    );

    const increaseQuantity = useCartStore(
        (state) => state.increaseQuantity
    );

    const decreaseQuantity = useCartStore(
        (state) => state.decreaseQuantity
    );

    // Derived State
    const totalProducts = cartItems.length;

    const totalQuantity = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    const subtotal = cartItems.reduce(
        (total, item) =>
            total + item.price * item.quantity,
        0
    );

    return (
        <div className="max-w-xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">
                Shopping Cart
            </h1>

            {cartItems.map((item) => (
                <div
                    key={item.id}
                    className="border rounded-lg p-4 mb-3"
                >
                    <h2 className="font-semibold">
                        {item.name}
                    </h2>

                    <p>Price: Rs. {item.price}</p>

                    <div className="flex items-center gap-4 mt-2">
                        <button
                            onClick={() => decreaseQuantity(item.id)}
                            className="bg-gray-600 px-3 py-1 rounded"
                        >
                            -
                        </button>

                        <span>{item.quantity}</span>

                        <button
                            onClick={() => increaseQuantity(item.id)}
                            className="bg-gray-600 px-3 py-1 rounded"
                        >
                            +
                        </button>
                    </div>
                </div>
            ))}

            <div className="bg-blue-500 p-4 rounded-lg mt-6">
                <h2 className="font-bold text-lg mb-3">
                    Order Summary
                </h2>

                <p>Total Products: {totalProducts}</p>

                <p>Total Quantity: {totalQuantity}</p>

                <p className="font-bold mt-2">
                    Subtotal: Rs. {subtotal.toLocaleString()}
                </p>
            </div>
        </div>
    );
}