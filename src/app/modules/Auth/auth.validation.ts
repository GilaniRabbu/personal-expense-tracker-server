import { z } from 'zod';

const loginValidationSchema = z.object({
  email: z.string(),
  password: z.string().min(6),
});

export const authValidation = {
  loginValidationSchema,
};
