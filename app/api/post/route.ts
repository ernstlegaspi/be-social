import prisma from '@/lib/db'

import { res } from '@/lib/status'

export async function POST(req: Request) {
	try {
		const _body = await req.json()

		const { body, interests, name, picture, userId } = _body

		if(!body || !interests || interests.length < 1 || !name || !userId) return res(400)

		await prisma.post.create({
			data: {
				..._body
			}
		})

		return res(201)
	}
	catch(error) {
		return res(500)
	}
}
