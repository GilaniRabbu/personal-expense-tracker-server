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

export default {
  createExpense,
  getAllExpenses,
  updateExpense,
  deleteExpense,
};
