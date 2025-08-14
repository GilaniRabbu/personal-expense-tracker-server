import { Schema, model, Document } from 'mongoose';

export interface IExpense extends Document {
  title: string;
  amount: number;
  category?: string;
  date: Date;
  isDeleted: boolean;
  deletedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const ExpenseSchema = new Schema<IExpense>(
  {
    title: { type: String, required: true, trim: true, minlength: 3 },
    amount: { type: Number, required: true, min: 0.01 },
    category: { type: String, trim: true },
    date: { type: Date, required: true },
    isDeleted: { type: Boolean, default: false },
    deletedAt: { type: Date },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Handy indexes
ExpenseSchema.index({ date: -1 });
ExpenseSchema.index({ category: 1, date: -1 });

const Expense = model<IExpense>('Expense', ExpenseSchema);
export default Expense;
