'use server'

import prisma from '@/lib/db'

export default async function getPostsPerInterests(userId: string, interests: string[]) {
	try {
		const posts = await prisma.post.findMany({
			where: {
				userId: {
					not: userId
				},
				interests: {
					hasSome: interests
				}
			}
		})

		delete (posts as any)?.updatedAt

		console.log(posts)
		
		return posts as Post[]
	}
	catch(e) {
		throw new Error("Internal Server Error")
	}
}
