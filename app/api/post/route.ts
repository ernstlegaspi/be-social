import prisma from '@/lib/db'

import { res } from '@/lib/status'

export async function POST(req: Request) {
	try {
		const _body = await req.json()

		const { body, name, picture, userId } = _body

		if(!body || !name || !userId) return res(400)

		await prisma.post.create({
			data: {
				body,
				name,
				picture,
				userId
			}
		})
		console.log(66)

		return res(201)
	}
	catch(error) {
		return res(500)
	}
}
