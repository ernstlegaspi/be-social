'use server'

import prisma from '@/lib/db'

export default async function getOtherUser(currentUserId: string, interests: string[]) {
	try {
		const otherUsers = await prisma.user.findMany({
			where: {
				id: {
					not: currentUserId
				},
				interests: {
					hasSome: interests
				}
			},
			select: {
				id: true,
				name: true,
				picture: true,
				userName: true
			}
		})

		return otherUsers
	}
	catch(e) {
		throw new Error("Internal Server Error")
	}
}
