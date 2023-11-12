import { z } from 'zod';

export const profileSchema = z.object({
	firstName: z.string().trim().min(1, { message: 'THIS IS CUSTOMMMMMM' }),
	lastName: z.string().trim().min(1),
	email: z.string().trim().email().min(1),
	phoneNumber: z.string().trim().min(1),
	position: z.string().trim().optional(),
	facebook: z.string().trim().optional(),
	instagram: z.string().trim().optional()
});

export type ProfileSchema = typeof profileSchema;
