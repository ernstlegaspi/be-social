'use server'

import prisma from '@/lib/db'

export default async function getOtherUser(currentUserId: string, interests: string[]) {
	try {
		const randomUsers: { name: string, userName: string, picture: string | null }[] = []
		let i = 0

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
				name: true,
				picture: true,
				userName: true
			}
		})

		while(i < 6) {
			const rand = Math.floor(Math.random() * otherUsers.length)
			const value = otherUsers[rand]

			if(randomUsers.includes(value)) continue

			randomUsers.push(value)

			i++
		}

		return randomUsers
	}
	catch(e) {
		throw new Error("Internal Server Error")
	}
}
