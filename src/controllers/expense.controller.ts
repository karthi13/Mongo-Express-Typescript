import { RequestHandler } from "express";
import { IExpense } from "src/interfaces/model-interfaces/expense.interface";

import { addExpenseHandler } from '../services/expense.service';

export const addExpense: RequestHandler = async (req, res): Promise<void> => {
  const expense = req.body as IExpense;
  const addedExpense = await addExpenseHandler(expense);
  res.json({ message: addedExpense });
}

export const getAllExpenses: RequestHandler = async (req, res): Promise<void> => {
  res.status(200).json({ message: "Get Expense Called" });
}

export const getExpense = () => {}; 
export const updateExpense = () => {};
export const deleteExpense = () => {};
export const deleteExpenses = () => {};