import { z } from 'zod';

export const signInSchema = z.object({
  email: z.string({ required_error: 'Email is required' }).trim().min(1, 'Email is required').email('Invalid email'),
  password: z
    .string({ required_error: 'Password is required' })
    .trim()
    .min(1, 'Password is required')
    .min(4, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters'),
});

export const signUpSchema = z.object({
  name: z.string({ required_error: 'Name is required' }).trim().min(1, 'Name is required').max(64, 'Name must be less than 64 characters'),
  email: z.string({ required_error: 'Email is required' }).trim().min(1, 'Email is required').email('Invalid email'),
  password: z
    .string({ required_error: 'Password is required' })
    .trim()
    .min(1, 'Password is required')
    .min(4, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters'),
  confirmPassword: z
    .string({ required_error: 'Confirm Password is required' })
    .trim()
    .min(1, 'Confirm Password is required')
    .min(4, 'Confirm Password must be more than 8 characters')
    .max(32, 'Confirm Password must be less than 32 characters'),
});

export type SignInSchemaType = z.infer<typeof signInSchema>;
export type SignUpSchemaType = z.infer<typeof signUpSchema>;
