import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiErrors';
import Expense from './expense.model';

type CreatePayload = {
  title: string;
  amount: number;
  category?: string;
  date: string; // ISO string; will be cast to Date
};

type UpdatePayload = Partial<Omit<CreatePayload, 'date'> & { date: string }>;

const createExpense = async (payload: CreatePayload): Promise<any> => {
  const doc = await Expense.create({
    ...payload,
    date: new Date(payload.date),
  });
  return doc;
};

const getAllExpenses = async (): Promise<any[]> => {
  const docs = await Expense.find({ isDeleted: false }).sort({
    date: -1,
    createdAt: -1,
  });
  return docs;
};

const updateExpense = async (
  id: string,
  payload: UpdatePayload
): Promise<any> => {
  const updates: any = { ...payload };
  if (payload.date) updates.date = new Date(payload.date);

  const doc = await Expense.findOneAndUpdate(
    { _id: id, isDeleted: false },
    updates,
    { new: true, runValidators: true }
  );

  if (!doc) throw new ApiError(httpStatus.NOT_FOUND, 'Expense not found');
  return doc;
};

const deleteExpense = async (id: string): Promise<void> => {
  const doc = await Expense.findOneAndUpdate(
    { _id: id, isDeleted: false },
    { isDeleted: true, deletedAt: new Date() },
    { new: true }
  );
  if (!doc) throw new ApiError(httpStatus.NOT_FOUND, 'Expense not found');
};

export const ExpenseService = {
  createExpense,
  getAllExpenses,
  updateExpense,
  deleteExpense,
};
