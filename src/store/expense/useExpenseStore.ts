import { create } from "zustand";

// Allowed expense categories
export type ExpenseCategory = "Food" | "Travel" | "Shopping" | "Other";

// Expense data structure
export type Expense = {
  id: number;
  title: string;
  amount: number;
  category: ExpenseCategory;
};

// Zustand Store structure
type ExpenseState = {
  expenses: Expense[];

  addExpense: (
    title: string,
    amount: number,
    category: ExpenseCategory,
  ) => void;

  removeExpense: (id: number) => void;
};

const useExpenseStore = create<ExpenseState>()((set) => ({
  expenses: [
    {
      id: 1,
      title: "Lunch",
      amount: 1200,
      category: "Food",
    },
    {
      id: 2,
      title: "Bus Ticket",
      amount: 300,
      category: "Travel",
    },
  ],

  addExpense: (title, amount, category) =>
    set((state) => ({
      expenses: [
        ...state.expenses,
        {
          id: Date.now(),
          title,
          amount,
          category,
        },
      ],
    })),

  removeExpense: (id) =>
    set((state) => ({
      expenses: state.expenses.filter((expense) => expense.id !== id),
    })),
}));

export default useExpenseStore;
