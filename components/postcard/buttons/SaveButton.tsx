'use client'

import axios from "axios"
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5"
import InteractButton from "./InteractButton"

export default function SaveButton({ post, user }: { post: Post, user: User }) {
	return <InteractButton
		active={false}
		activeIcon={IoBookmark}
		hoverColor="bg-yellow-400/15 shadow-yellow-600"
		icon={IoBookmarkOutline}
		onClick={() => {}}
		otherColor="text-yellow-700"
		text=""
	/>
}
