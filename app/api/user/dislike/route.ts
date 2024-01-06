import prisma from '@/lib/db'
import { res } from '@/lib/status'

export async function PUT(req: Request) {
	try {
		const body = await req.json()

		const { filteredLikers, postId, userId } = body

		const existingLikedPost = await prisma.user.findUnique({
			where: {
				id: userId
			},
			include: {
				likedPost: true
			}
		})

		const filteredExistingLikedPostIds = existingLikedPost?.likedPost
			.filter((post) => post?.id !== postId)
			.map((post) => ({ id: post.id }))

		await prisma.user.update({
			where: {
				id: userId,
			},
			data: {
				likedPost: {
					set: filteredExistingLikedPostIds
				}
			}
		})

		await prisma.post.update({
			where: {
				id: postId
			},
			data: {
				likers: filteredLikers
			}
		})

		return res(200)
	}
	catch(e) {
		return res(500)
	}
}
