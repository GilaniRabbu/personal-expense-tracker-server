import { z } from 'zod';

export const createExpenseValidation = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  amount: z
    .number({ invalid_type_error: 'Amount must be a number' })
    .positive('Amount must be greater than 0'),
  category: z.string().trim().optional(),
  // Expect ISO date string; convert later in service/model
  date: z
    .string()
    .datetime()
    .or(z.string().refine((v) => !Number.isNaN(Date.parse(v)), 'Invalid date')),
});

export const updateExpenseValidation = z
  .object({
    title: z.string().min(3).optional(),
    amount: z.number().positive().optional(),
    category: z.string().trim().optional(),
    date: z
      .string()
      .datetime()
      .or(
        z.string().refine((v) => !Number.isNaN(Date.parse(v)), 'Invalid date')
      )
      .optional(),
  })
  .refine((data) => Object.keys(data).length > 0, {
    message: 'At least one field must be provided',
  });
