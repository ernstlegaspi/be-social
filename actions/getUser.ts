'use server'

import prisma from '@/lib/db'

export default async function getUser(email: string) {
	const user = await prisma.user.findUnique({
		where: {
			email
		}
	})

	delete (user as any)?.password

	return user as User
}
