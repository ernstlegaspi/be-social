type User = {
	id: string
	email: string
	name: string
	interests: string[]
	userName: string
	picture: string | null
	createdAt: Date
	updatedAt: Date
}

type Post = {
	createdAt?: Date
	body: string
	id?: string
	interests: string[]
	name: string
	picture: string
	userId: string
}
