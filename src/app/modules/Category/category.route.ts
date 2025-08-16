import express from 'express';
import CategoryController from './category.controller';

const router = express.Router();

// ✅ Create category
router.post('/', CategoryController.createCategory);

// ✅ Get all categories
router.get('/', CategoryController.getAllCategories);

// ✅ Get category by ID
router.get('/:id', CategoryController.getCategoryById);

// ✅ Update category
router.patch('/:id', CategoryController.updateCategory);

// ✅ Delete category
router.delete('/:id', CategoryController.deleteCategory);

export const CategoryRoutes = router;
