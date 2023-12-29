import { create } from 'zustand'

type Props = {
	email: string
	setEmail: (newEmail: string) => void
}

const useUserEmail = create<Props>(set => ({
	email: '',
	setEmail: (newEmail: string) => set({ email: newEmail })
}))

export default useUserEmail
