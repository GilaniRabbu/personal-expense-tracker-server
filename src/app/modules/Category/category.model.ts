import { Schema, model } from 'mongoose';

const CategorySchema = new Schema(
  {
    name: { type: String, required: true, trim: true, unique: true },
    isDeleted: { type: Boolean, default: false },
    deletedAt: { type: Date },
  },
  {
    timestamps: true,
  }
);

const Category = model('Category', CategorySchema);

export default Category;
