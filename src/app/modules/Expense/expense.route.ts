import express from 'express';
import ExpenseController from './expense.controller';

const router = express.Router();

// POST /expenses → Add a new expense
router.post('/', ExpenseController.createExpense);

// GET /expenses → Fetch all expenses
router.get('/', ExpenseController.getAllExpenses);

// GET /expenses → Fetch expenses by category
router.get('/category/:categoryId', ExpenseController.getExpensesByCategory);

// PATCH /expenses/:id → Update an expense
router.patch('/:id', ExpenseController.updateExpense);

// DELETE /expenses/:id → Delete an expense
router.delete('/:id', ExpenseController.deleteExpense);

export const ExpenseRouter = router;
