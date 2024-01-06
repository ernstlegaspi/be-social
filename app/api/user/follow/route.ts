import prisma from '@/lib/db'
import { res } from '@/lib/status'

export async function POST(req: Request) {
	try {
		const body = await req.json()

		const { otherUserId, userId } = body

		if(!otherUserId || !userId) return res(400)

		await prisma.user.update({
			where: {
				id: userId
			},
			data: {
				followingIDs: {
					push: otherUserId
				}
			},
			select: {
				following: true
			}
		})

		return res(201)
	}
	catch(e) {
		return res(500)
	}
}
