'use client'

import { IoSearchSharp } from "react-icons/io5"

export default function SearchBar() {
	return <div className="v-center ml-[152px]">
		<input type="text" className="outline-none rounded-l-[5px] p-2 border border-r-0 border-vio" />
		<div className="border border-l-0 border-vio rounded-r-[5px] py-[9px] px-3 pointer text-vio">
			<IoSearchSharp size={22} />
		</div>
	</div>
}
