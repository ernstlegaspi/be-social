import { create } from 'zustand'

type Props = {
	isInterests: boolean
	setIsInterests: (toggle: boolean) => void
}

const useIsInterests = create<Props>(set => ({
	isInterests: false,
	setIsInterests: (toggle: boolean) => set({ isInterests: toggle })
}))

export default useIsInterests
