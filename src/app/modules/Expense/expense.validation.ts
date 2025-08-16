import { z } from 'zod';

export const createExpenseValidation = z
  .object({
    title: z
      .string()
      .min(3, { message: 'Title must be at least 3 characters' }),
    amount: z
      .number({ invalid_type_error: 'Amount must be a number' })
      .positive({ message: 'Amount must be greater than 0' }),
    category: z.string().trim().optional(),
    date: z.string().refine((v) => !Number.isNaN(Date.parse(v)), {
      message: 'Invalid date format',
    }),
  })
  .strict();

export const updateExpenseValidation = z
  .object({
    title: z
      .string()
      .min(3, { message: 'Title must be at least 3 characters' })
      .optional(),
    amount: z
      .number({ invalid_type_error: 'Amount must be a number' })
      .positive({ message: 'Amount must be greater than 0' })
      .optional(),
    category: z.string().trim().optional(),
    date: z
      .string()
      .refine((v) => !Number.isNaN(Date.parse(v)), {
        message: 'Invalid date format',
      })
      .optional(),
  })
  .strict()
  .refine((data: any) => Object.keys(data).length > 0, {
    message: 'At least one field must be provided',
  });
