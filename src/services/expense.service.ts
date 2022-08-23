import { IExpense } from "../interfaces/model-interfaces/expense.interface";
import { Expense } from "../models/Expense.model";

export const addExpenseHandler = async (expense: IExpense): Promise<IExpense> => {
  return await new Expense(expense).save();
};


