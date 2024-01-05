'use client'

import { format } from 'date-fns'
import { BiLike, BiSolidLike } from "react-icons/bi"
import { BsEmojiSmile, BsThreeDots } from "react-icons/bs"
import { FaComment, FaRegComment, FaShareAlt } from "react-icons/fa"
import { IoIosAttach } from "react-icons/io"
import { IoBookmark, IoBookmarkOutline, IoImageOutline, IoShareSocialOutline } from "react-icons/io5"
import { useState } from 'react'

import ProfilePicture from "./ProfilePicture"
import HoverableIcon from './HoverableIcon'
import { IconType } from 'react-icons'

type InteractButtonProps = {
	active: boolean
	activeIcon: IconType
	hasMargin?: boolean
	hoverColor: string
	icon: IconType
	otherColor: string
	text: string
}

export default function PostCard({ post, user }: { post: Post, user: User }) {
	const InteractButton = ({ active, activeIcon: Active, hasMargin, hoverColor, icon: Icon, otherColor, text }: InteractButtonProps) => {
		const [hovered, setHovered] = useState(false)

		return <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
			className={`${hovered || active ? otherColor : 'text-dark'} ${hasMargin ? 'mr-6' : ''} v-center pointer py-3`}>
			<div className={`
				${hovered && !active ? `${hoverColor} rounded-full shadow` : ''}
				mr-[5px] p-2 transition-all
			`}>
				{active ? <Active size={22} /> : <Icon size={22} />}
			</div>
			<p>{text}</p>
		</div>
	}

	return <div className="w-full card mt-6">
		<div className="p-6">
			<div className="v-center-bet mb-6">
				<div className="v-center">
					<ProfilePicture picture={post?.picture} />
					<div className="ml-3">
						<p className="font-medium pointer hover:underline">{post?.name}</p>
						<p className="text-[13px] text-vio pointer hover:underline">{format(post?.createdAt as Date, "dd MMMM 'at' hh:mm aa")}</p>
					</div>
				</div>
				<HoverableIcon icon={BsThreeDots} onClick={() => {}} />
			</div>
			<div>{post?.body}</div>
		</div>
		<div className="f-center px-3 border-t border-b border-vio/30">
			<InteractButton active={false} activeIcon={BiSolidLike} hasMargin hoverColor="bg-pink-400/30 shadow-pink-500" icon={BiLike} otherColor="text-pink-500" text="" />
			<InteractButton active={false} activeIcon={FaComment} hasMargin hoverColor="bg-blue-400/20 shadow-blue-400" icon={FaRegComment} otherColor="text-blue-400" text="" />
			<InteractButton active={false} activeIcon={FaShareAlt} hasMargin hoverColor="bg-dvio/10 shadow-dvio" icon={IoShareSocialOutline} otherColor="text-dvio" text="" />
			<InteractButton active={false} activeIcon={IoBookmark} hoverColor="bg-yellow-400/15 shadow-yellow-600" icon={IoBookmarkOutline} otherColor="text-yellow-700" text="" />
		</div>
		<div className="v-center p-4">
			<ProfilePicture picture={user?.picture as string} />
			<div className="flex-1 ml-3 text-vio transition-all duration-300 pointer hover:bg-vio/30 rounded-[5px] px-2 py-1 v-center-bet">
				<p>Write a comment...</p>
				<div className="flex">
					<HoverableIcon icon={IoIosAttach} onClick={() => {}} size={22} />
					<HoverableIcon icon={BsEmojiSmile} onClick={() => {}} size={22} />
					<HoverableIcon icon={IoImageOutline} onClick={() => {}} size={22} />
				</div>
			</div>
		</div>
	</div>
}
