import { create } from 'zustand'

type Props = {
	currentUser: User
	setCurrentUser: (newCurrentUser: User) => void
}

const useCurrentUser = create<Props>(set => ({
	currentUser: {
		id: '',
		email: '',
		followersIDs: [],
		followingIDs: [],
		name: '',
		interests: [],
		userName: '',
		picture: '',
		createdAt: new Date(),
		updatedAt: new Date()
	},
	setCurrentUser: (newCurrentUser: User) => set({ currentUser: newCurrentUser })
}))

export default useCurrentUser
