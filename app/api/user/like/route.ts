import prisma from '@/lib/db'
import { res } from '@/lib/status'

export async function PUT(req: Request) {
	try {
		const body = await req.json()

		const { postId, userId } = body

		await prisma.post.update({
			where: {
				id: postId
			},
			data: {
				likedUserId: userId,
				likers: {
					push: userId
				}
			}
		})

		return res(200)
	}
	catch(e) {
		return res(500)
	}
}
