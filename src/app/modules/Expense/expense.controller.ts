import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { ExpenseService } from './expense.service';

const createExpense = catchAsync(async (req: Request, res: Response) => {
  const result = await ExpenseService.createExpense(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Expense created successfully',
    data: result,
  });
});

const getAllExpenses = catchAsync(async (_req: Request, res: Response) => {
  const result = await ExpenseService.getAllExpenses();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Expenses fetched successfully',
    data: result,
  });
});

export const getExpensesByCategory = catchAsync(
  async (req: Request, res: Response) => {
    const { categoryId } = req.params;

    const result = await ExpenseService.getExpensesByCategory(categoryId);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Expenses fetched by category successfully',
      data: result,
    });
  }
);

const updateExpense = catchAsync(async (req: Request, res: Response) => {
  const result = await ExpenseService.updateExpense(req.params.id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Expense updated successfully',
    data: result,
  });
});

const deleteExpense = catchAsync(async (req: Request, res: Response) => {
  await ExpenseService.deleteExpense(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Expense deleted successfully',
    data: null,
  });
});

const ExpenseController = {
  createExpense,
  getAllExpenses,
  getExpensesByCategory,
  updateExpense,
  deleteExpense,
};

export default ExpenseController;
