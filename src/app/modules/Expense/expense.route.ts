import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import ExpenseController from './expense.controller';
import {
  createExpenseValidation,
  updateExpenseValidation,
} from './expense.validation';

const router = express.Router();

// POST /expenses → Add a new expense
router.post(
  '/',
  validateRequest(createExpenseValidation),
  ExpenseController.createExpense
);

// GET /expenses → Fetch all expenses
router.get('/', ExpenseController.getAllExpenses);

// GET /expenses → Fetch expenses by category
router.get('/category/:categoryId', ExpenseController.getExpensesByCategory);

// PATCH /expenses/:id → Update an expense
router.patch(
  '/:id',
  validateRequest(updateExpenseValidation),
  ExpenseController.updateExpense
);

// DELETE /expenses/:id → Delete an expense
router.delete('/:id', ExpenseController.deleteExpense);

export const ExpenseRouter = router;
