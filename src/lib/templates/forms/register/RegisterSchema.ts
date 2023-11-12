import { z } from 'zod';

export const registerSchema = z
	.object({
		firstName: z.string().trim().min(1),
		lastName: z.string().trim().min(1),
		email: z.string().trim().email().min(1),
		companyName: z.string().trim().min(1),
		password: z.string().trim().min(8),
		confirmPassword: z.string().trim().min(8)
		// termsAndConditions: z.literal<boolean>(true)
	})
	.superRefine(({ confirmPassword, password }, ctx) => {
		if (confirmPassword !== password) {
			ctx.addIssue({
				code: 'custom',
				message: 'The passwords did not match'
			});
		}
	});

export type RegisterSchema = typeof registerSchema;
