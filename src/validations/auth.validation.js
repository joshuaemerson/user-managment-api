/**
 * Define the expected shape of your data — and then validate incoming data against that shape at runtime.
 *
 * Used to:
 * - Validate req.body in Express routes
 * - Validate API responses
 */

import { z } from 'zod';

export const signupSchema = z.object({
  name: z.string().min(1).max(255).trim(),
  email: z.email().max(255).toLowerCase().trim(),
  password: z.string().min(8).max(64),
  role: z.enum(['user', 'admin']),
});

export const signInSchema = z.object({
  email: z.email().toLowerCase().trim(),
  password: z.string().min(1),
});
