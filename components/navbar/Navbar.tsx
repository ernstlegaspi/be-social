import Link from "next/link"

import SearchBar from "./SearchBar"
import UserNav from "./UserNav"

export default function Navbar() {
	return <div className="w-full py-4 border-b-2 border-vio/15 fixed z-30 bg-white">
		<div className="v-center w-[95%] mx-auto justify-between">
			<div className="v-center">
				<Link href="/">
					<h1 className="text-40 font-extrabold text-vio">Huddle</h1>
				</Link>
				<SearchBar />
			</div>
			<UserNav />
		</div>
	</div>
}