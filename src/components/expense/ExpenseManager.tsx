"use client";

import { useState } from "react";

import useExpenseStore, {
  type ExpenseCategory,
} from "../../store/expense/useExpenseStore";

export default function ExpenseManager() {
  const expenses = useExpenseStore((state) => state.expenses);

  const addExpense = useExpenseStore((state) => state.addExpense);

  const removeExpense = useExpenseStore((state) => state.removeExpense);

  // Local component state
  const [title, setTitle] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [category, setCategory] = useState<ExpenseCategory>("Food");

  // Derived State
  const totalExpense = expenses.reduce(
    (total, expense) => total + expense.amount,
    0,
  );

  const handleAddExpense = () => {
    const numericAmount = Number(amount);

    if (!title.trim() || !amount || numericAmount <= 0) {
      return;
    }

    addExpense(title.trim(), numericAmount, category);

    setTitle("");
    setAmount("");
    setCategory("Food");
  };

  return (
    <>
      <div className="max-w-xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Expense Tracker</h1>

        <div className="space-y-3 mb-6">
          <input
            type="text"
            placeholder="Expense title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="border p-2 rounded w-full"
          />

          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            className="border p-2 rounded w-full"
          />

          <select
            value={category}
            onChange={(event) =>
              setCategory(event.target.value as ExpenseCategory)
            }
            className="border p-2 rounded w-full"
          >
            <option value="Food">Food</option>
            <option value="Travel">Travel</option>
            <option value="Shopping">Shopping</option>
            <option value="Other">Other</option>
          </select>

          <button
            type="button"
            onClick={handleAddExpense}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Add Expense
          </button>
        </div>

        <div className="bg-green-50 p-4 rounded mb-6">
          <h2 className="font-bold">Total Expense</h2>
          <p className="text-xl font-bold">
            Rs. {totalExpense.toLocaleString()}
          </p>
        </div>

        <h2 className="font-bold mb-3">Expense List</h2>

        {expenses.map((expense) => (
          <div
            key={expense.id}
            className="border p-3 rounded mb-3 flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">{expense.title}</p>
              <p className="text-sm text-gray-500">{expense.category}</p>
              <p>Rs. {expense.amount.toLocaleString()}</p>
            </div>

            <button
              type="button"
              onClick={() => removeExpense(expense.id)}
              className="bg-red-600 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
