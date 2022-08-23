import { Router } from 'express';
import { addExpense, getAllExpenses, getExpense, updateExpense, deleteExpense, deleteExpenses } from '../controllers/expense.controller'

const expenseRouter = Router();

expenseRouter.post('/', addExpense);

expenseRouter.put('/', updateExpense);

expenseRouter.get('/', getAllExpenses);
expenseRouter.get('/:expenseId', getExpense);
expenseRouter.delete('/:expenseId', deleteExpense);
expenseRouter.delete('/', deleteExpenses);

export default expenseRouter;