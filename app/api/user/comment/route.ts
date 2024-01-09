import prisma from '@/lib/db'
import { res } from '@/lib/status'

export async function POST(req: Request) {
	try {
		const _body = await req.json()

		const { body, name, postId, userId } = _body

		if(!body || !name || !postId || !userId) return res(400)

		await prisma.comment.create({
			data: {
				..._body
			}
		})

		return res(201)
	}
	catch(e) {
		return res(500)
	}
}
