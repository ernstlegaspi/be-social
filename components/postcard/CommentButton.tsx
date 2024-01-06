'use client'

import axios from "axios"
import { FaComment, FaRegComment } from "react-icons/fa"
import InteractButton from "./InteractButton"

export default function CommentButton({ post, user }: { post: Post, user: User }) {
	return <InteractButton
		active={false}
		activeIcon={FaComment}
		hasMargin
		hoverColor="bg-blue-400/20 shadow-blue-400"
		icon={FaRegComment}
		onClick={() => {}}
		otherColor="text-blue-400"
		text=""
	/>
}
