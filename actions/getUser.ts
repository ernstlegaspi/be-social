'use server'

import prisma from '@/lib/db'

export default async function getUser(email: string) {
	try {
		const user = await prisma.user.findUnique({
			where: {
				email
			}
		})

		if(!user) throw new Error("No user existing with that email")

		delete (user as any)?.password

		return user
	}
	catch(e) {
		throw new Error("Internal Server Error")
	}
}
