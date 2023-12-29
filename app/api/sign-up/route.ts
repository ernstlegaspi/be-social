import prisma from '@/lib/db'
import bcrypt from 'bcrypt'

import { res } from '@/lib/status'

export async function POST(req: Request) {
	try {
		const body = await req.json()

		const { email, name, password } = body

		if(!email || !name || !password) return res(400)

		const user = await prisma.user.findUnique({
			where: {
				email
			}
		})

		if(user) return res(409)

		const salt = await bcrypt.genSalt(12)
		const hashedPassword = await bcrypt.hash(password, salt)

		await prisma.user.create({
			data: {
				...body,
				userName: `@${name.replaceAll(" ", "_")}`,
				password: hashedPassword
			}
		})

		return res(201)
	}
	catch(error) {
		return res(500)
	}
}
