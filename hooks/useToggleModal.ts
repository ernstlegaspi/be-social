import { create } from 'zustand'

type Props = {
	isOpen: boolean
	close: () => void
	open: () => void
}

const createModal = (initialState: { isOpen: boolean }) => create<Props>((set) => ({
	...initialState,
	close: () => set({ isOpen: false }),
	open: () => set({ isOpen: true })
}))

export const useViewPostModal = createModal({ isOpen: false })
export const useAddPostModal = createModal({ isOpen: false })
