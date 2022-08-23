import { Schema, model } from "mongoose";
import { IExpense } from "src/interfaces/model-interfaces/expense.interface";

const expenseSchema = new Schema<IExpense>({
  date: { type: String, required: true },
  account: { type: String, required: true },
  category: String,
  subCategory: String,
  amount: { type: Number, required: true },
  note: String,
});

export const Expense = model<IExpense>("Expense", expenseSchema);
