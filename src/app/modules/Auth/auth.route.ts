import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AuthController } from './auth.controller';
import { authValidation } from './auth.validation';

const router = express.Router();

// user login route
router.post(
  '/login',
  validateRequest(authValidation.loginValidationSchema),
  AuthController.loginUser
);

export const AuthRoute = router;
