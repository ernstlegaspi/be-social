'use client'

import axios from "axios"
import toast from "react-hot-toast"
import { BiLike, BiSolidLike } from "react-icons/bi"
import { useRef, useState } from "react"

import InteractButton from "./InteractButton"

export default function LikeButton({ post, user }: { post: Post, user: User }) {
	const hasLikedPost = useRef(false)
	const hasDislikedPost = useRef(false)
	const [isLike, setIsLike] = useState(false)
	const likesCount = useRef(post?.likers.length)
	const isActive = post?.likers.includes(user?.id)

	const handleLike = async () => {
		hasLikedPost.current = true
		hasDislikedPost.current = false
		setIsLike(true)
		++likesCount.current

		try {
			await axios.put("/api/user/like", { postId: post?.id, userId: user?.id })
		}
		catch(e) {
			toast.error("Can not like post. Try again later.")
			setIsLike(false)
			--likesCount.current
		}
	}

	const handleDislike = async () => {
		hasLikedPost.current = false
		hasDislikedPost.current = true
		setIsLike(false)
		--likesCount.current

		try {
			const filteredLikers = post?.likers.filter(likerId => likerId !== user?.id)
			
			await axios.put("/api/user/dislike", { filteredLikers, postId: post?.id, userId: user?.id })
		}
		catch(e) {
			toast.error("Can not like post. Try again later.")
			setIsLike(false)
			++likesCount.current
		}
	}
	
	const handleClick = async () => {
		if(hasLikedPost.current || isActive) {
			await handleDislike()

			return
		}

		await handleLike()
	}

	return <InteractButton
		active={(isLike || isActive) && !hasDislikedPost.current}
		activeIcon={BiSolidLike}
		hasMargin
		hoverColor="bg-pink-400/30 shadow-pink-500"
		icon={BiLike}
		onClick={handleClick}
		otherColor="text-pink-500"
		text={isLike ? `${likesCount.current}` : likesCount.current < 1 ? '' : `${likesCount.current}`}
	/>
}
