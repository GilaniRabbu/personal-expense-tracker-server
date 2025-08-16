import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiErrors';
import Category from './category.model'; // Mongoose model

const createCategory = async (payload: { name: string }) => {
  const { name } = payload;

  const existingCategory = await Category.findOne({ name });

  if (existingCategory) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Category Already Exists');
  }

  const newCategory = new Category({
    name,
  });

  await newCategory.save();
  return {
    category: {
      _id: newCategory._id,
      name: newCategory.name,
    },
  };
};

const getAllCategories = async () => {
  const categories = await Category.find().lean();
  return categories.map((cat) => ({
    id: cat._id.toString(),
    name: cat.name,
  }));
};

const getCategoryById = async (id: string) => {
  const category = await Category.findById(id);
  if (!category) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Category Not Found');
  }
  return category;
};

const updateCategory = async (id: string, payload: { name?: string }) => {
  const updatedCategory = await Category.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  if (!updatedCategory) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Category Not Found');
  }
  return updatedCategory;
};

const deleteCategory = async (id: string) => {
  const deletedCategory = await Category.findByIdAndDelete(id);
  if (!deletedCategory) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Category Not Found');
  }
  return deletedCategory;
};

export const CategoryService = {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
