import { z } from 'zod';

export const accountSchema = z.object({
	// firstName: z.string().trim().min(1)
	lastName: z.string().trim().min(1)
	// email: z.string().trim().email().min(1),
	// companyName: z.string().trim().min(1),
	// password: z.string().trim().min(8),
	// confirmPassword: z.string().trim().min(8)
	// termsAndConditions: z.literal<boolean>(true)
});
