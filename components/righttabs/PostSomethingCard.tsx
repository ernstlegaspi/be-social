'use client'

import { IoImageOutline } from "react-icons/io5"

import ProfilePicture from "../ProfilePicture"
import useAddPostModal from "@/hooks/useAddPostModal"
import HoverableIcon from "../HoverableIcon"

export default function PostSomethingCard({ picture }: { picture: string }) {
	const { open } = useAddPostModal()

	return <div className="w-full h-max card py-3">
		<p className="border-b border-vio/15 sub-label">Post Something</p>
		<div className="v-center-bet px-3 pt-3">
			<ProfilePicture picture={picture} />
			<p onClick={() => open()} className="flex-1 mx-3 pointer transition-all duration-300 hover:bg-vio/30 p-2 rounded-[6px] text-vio">What's on your mind?</p>
			<HoverableIcon icon={IoImageOutline} size={22} onClick={() => {}} />
		</div>
	</div>
}
