type TComment = {
	id?: string
	body: string
	picture: string
	name: string
	createdAt?: Date
	postId: string
	userCommentFromId: string[]
	userCommentToId: string[]
	userId: string
	likers: string[]
	likedUserId?: string
}

type User = {
	id: string
	email: string
	followersIDs: string[]
	followingIDs: string[]
	name: string
	interests: string[]
	userName: string
	picture: string | null
	createdAt: Date
	updatedAt: Date
}

type Post = {
	comments?: TComment[]
	createdAt?: Date
	body: string
	id?: string
	interests: string[]
	likers: string[]
	likedUserId?: string
	name: string
	picture: string
	userId: string
}
