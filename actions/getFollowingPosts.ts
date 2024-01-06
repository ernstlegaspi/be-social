'use server'

import prisma from '@/lib/db'

export default async function getFollowingPosts(userId: string) {
	try {
		const followingIDs = await prisma.user.findUnique({
			where: {
				id: userId
			},
			select: {
				followingIDs: true
			}
		})

		const posts = await prisma.post.findMany({
			orderBy: {
				createdAt: 'desc'
			}
		})

		return posts.filter(post => followingIDs?.followingIDs.includes(post?.userId))
	}
	catch(e) {
		throw new Error("Internal Server Error")
	}
}
