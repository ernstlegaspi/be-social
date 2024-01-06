'use client'

import { format } from 'date-fns'
import { BsEmojiSmile, BsThreeDots } from "react-icons/bs"
import { IoIosAttach } from "react-icons/io"
import { IoImageOutline } from "react-icons/io5"

import ProfilePicture from "../ProfilePicture"
import HoverableIcon from '../HoverableIcon'
import LikeButton from './LikeButton'
import CommentButton from './CommentButton'
import ShareButton from './ShareButton'
import SaveButton from './SaveButton'

export default function PostCard({ post, user }: { post: Post, user: User }) {
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
			<LikeButton post={post} user={user} />
			<CommentButton post={post} user={user} />
			<ShareButton post={post} user={user} />
			<SaveButton post={post} user={user} />
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
