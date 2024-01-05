'use client'

import useFilter from "@/hooks/useFilter"

export default function Filters() {
	const { filter, setFilter } = useFilter()

	const FilterButton = ({ text }: { text: string }) => {
		const isActive = text === filter

		return <p onClick={() => {
			setFilter(text)
		}} className={`${isActive ? 'font-bold' : ''} pointer mr-4`}>
			{text}
		</p>
	}

	return <div className="w-full v-center-bet mt-6">
		<p className="text-vio text-20 font-bold tracking-widest">Feed</p>
		<div className="text-vio v-center">
			<FilterButton text="For You" />
			<FilterButton text="Following" />
		</div>
	</div>
}
