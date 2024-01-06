'use client'

import axios from "axios"
import { FaShareAlt } from "react-icons/fa"
import { IoShareSocialOutline } from "react-icons/io5"
import InteractButton from "./InteractButton"

export default function ShareButton({ post, user }: { post: Post, user: User }) {
	return <InteractButton
		active={false}
		activeIcon={FaShareAlt}
		hasMargin
		hoverColor="bg-dvio/10 shadow-dvio"
		icon={IoShareSocialOutline}
		onClick={() => {}}
		otherColor="text-dvio"
		text=""
	/>
}
