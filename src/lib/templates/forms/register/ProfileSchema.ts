import { z } from 'zod';

export const profileSchema = z.object({
	firstName: z.string().trim().min(1, { message: 'THIS IS CUSTOMMMMMM' })
	// lastName: z.string().trim().min(1),
	// email: z.string().trim().email().min(1),
	// companyName: z.string().trim().min(1),
	// password: z.string().trim().min(8),
	// confirmPassword: z.string().trim().min(8)
	// termsAndConditions: z.literal<boolean>(true)
});
