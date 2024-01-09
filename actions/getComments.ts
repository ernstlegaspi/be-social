'use server'

import prisma from '@/lib/db'

export default async function getComments(postId: string) {
	try {
		if(!postId) throw new Error("No post found")
		
		const comments = await prisma.post.findUnique({
			where: {
				id: postId
			},
			select: {
				comments: {
					orderBy: {
						createdAt: 'desc'
					}
				}
			}
		})

		return comments?.comments
	}
	catch(e) {
		throw new Error("Can not get comments.")
	}
}
