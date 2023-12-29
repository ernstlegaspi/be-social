import { z } from 'zod'

export const signUpSchema = z.object({
	email: z.string().email(),
	name: z.string(),
	password: z.string(),
	confirmPassword: z.string()
})
.strict()
