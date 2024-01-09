'use client'

import axios from "axios"
import { FaComment, FaRegComment } from "react-icons/fa"

import InteractButton from "./InteractButton"

type Props = {
	len: number
	onClick: () => void
	post: Post
	user: User
}

export default function CommentButton({ len, onClick, post, user }: Props) {
	return <InteractButton
		active={false}
		activeIcon={FaComment}
		hasMargin
		hoverColor="bg-blue-400/20 shadow-blue-400"
		icon={FaRegComment}
		onClick={onClick}
		otherColor="text-blue-400"
		text={len < 1 ? '' : len.toString()}
	/>
}
