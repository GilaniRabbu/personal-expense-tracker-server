import express from 'express';
import { AuthRoute } from '../modules/Auth/auth.route';
import { UserRoute } from '../modules/User/user.route';
import { ExpenseRouter } from '../modules/Expense/expense.route';
import { CategoryRoute } from '../modules/Category/category.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoute,
  },

  {
    path: '/auth',
    route: AuthRoute,
  },

  {
    path: '/expenses',
    route: ExpenseRouter,
  },

  {
    path: '/categories',
    route: CategoryRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
