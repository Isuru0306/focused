import { createSlice } from "@reduxjs/toolkit";

export const expenseSlice = createSlice({
  name: "expenseSlice",
  initialState: {
    income: 1000,
    expenses: [],
    countActionPerformed: 0,
  },
  reducers: {
    addExpense: (state, action) => {
      state.expenses.push(action.payload);
    },
    setIncomeAction: (state, action) => {
      state.income = action.payload.income;
    },
    removeExpense: (state, action) => {
      state.expenses = state.expenses.filter(
        (expense) => expense.id !== action.payload
      );
    },
    incrementActionPerformed: (state, action) => {
      state.countActionPerformed++;
    },
  },
});

export const {
  addExpense,
  removeExpense,
  setIncomeAction,
  incrementActionPerformed,
} = expenseSlice.actions;
