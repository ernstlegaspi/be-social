import { create } from 'zustand'

type Props = {
	clickedPost: Post
	setClickedPost: (newClickedPost: Post) => void
}

const useClickedPost = create<Props>(set => ({
	clickedPost: {
		createdAt: new Date(),
		body: '',
		id: '',
		interests: [],
		likers: [],
		likedUserId: '',
		name: '',
		picture: '',
		userId: ''
	},
	setClickedPost: (newClickedPost: Post) => set({ clickedPost: newClickedPost })
}))

export default useClickedPost
