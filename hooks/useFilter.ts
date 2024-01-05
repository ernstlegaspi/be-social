import { create } from 'zustand'

type Props = {
	filter: string
	setFilter: (newFilter: string) => void
}

const useFilter = create<Props>(set => ({
	filter: 'For You',
	setFilter: (newFilter: string) => set({ filter: newFilter })
}))

export default useFilter
