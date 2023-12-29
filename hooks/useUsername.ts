import { create } from 'zustand'

type Props = {
	username: string
	setUserName: (newUsername: string) => void
}

const useUsername = create<Props>(set => ({
	username: '',
	setUserName: (newUsername: string) => set({ username: newUsername })
}))

export default useUsername
