import { Schema, model, Types } from 'mongoose';

const ExpenseSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    amount: { type: Number, required: true, min: 0 },
    category: { type: Types.ObjectId, ref: 'Category', required: true },
    date: { type: Date, required: true },
    isDeleted: { type: Boolean, default: false },
    deletedAt: { type: Date },
  },
  {
    timestamps: true,
  }
);

// Indexes
ExpenseSchema.index({ date: -1 });
ExpenseSchema.index({ category: 1 });

const Expense = model('Expense', ExpenseSchema);

export default Expense;
