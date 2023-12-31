'use client'

import { IoImageOutline } from "react-icons/io5"

import ProfilePicture from "../ProfilePicture"

export default function PostSomethingCard({ picture }: { picture: string }) {
	return <div className="w-full h-max card py-3">
		<p className="border-b border-vio/15 pb-[9px] px-4 text-vio font-medium">Post Something</p>
		<div className="v-center justify-between px-3 pt-3">
			<ProfilePicture picture={picture} />
			<p className="flex-1 ml-3 pointer transition-all duration-300 hover:bg-vio/30 p-2 rounded-[6px] text-vio">What's on your mind?</p>
			<div className="ml-3 p-2 rounded-full pointer transition-all duration-300 text-vio hover:bg-vio/30">
				<IoImageOutline size={22} />
			</div>
		</div>
	</div>
}
