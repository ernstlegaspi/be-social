'use client'

import axios from 'axios'
import toast from 'react-hot-toast'
import { format } from 'date-fns'
import { AiOutlineSend } from "react-icons/ai"
import { BsEmojiSmile, BsThreeDots } from "react-icons/bs"
import { IoIosAttach } from "react-icons/io"
import { IoImageOutline } from "react-icons/io5"
import { MdDeleteOutline } from "react-icons/md"
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'

import ProfilePicture from "../ProfilePicture"
import HoverableIcon from '../HoverableIcon'
import LikeButton from './buttons/LikeButton'
import CommentButton from './buttons/CommentButton'
import ShareButton from './buttons/ShareButton'
import SaveButton from './buttons/SaveButton'
import useClickedPost from '@/hooks/useClickedPost'
import useCurrentUser from '@/hooks/useCurrentUser'
import { useViewPostModal } from '@/hooks/useToggleModal'

type Props = {
	post: Post
	user: User
}

export default function PostCard({ post, user }: Props) {
	const [commentValue, setCommentValue] = useState('')
	const [hovered, setHovered] = useState(false)
	const [isCommenting, setIsCommenting] = useState(false)
	const { setClickedPost } = useClickedPost()
	const { setCurrentUser } = useCurrentUser()
	const { open } = useViewPostModal()
	const [len, setLen] = useState(post?.comments?.length as number)
	
	const handleClick = () => {
		if(hovered) return
		
		setClickedPost(post)
		setCurrentUser(user)
		open()
	}

	const Button = ({ children }: { children: React.ReactNode }) => <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className="w-max">
		{children}
	</div>

	const StartComment = () => <div onClick={() => setIsCommenting(true)} className="flex-1 ml-3 text-vio transition-all duration-300 pointer hover:bg-vio/30 rounded-[5px] px-2 py-1 v-center-bet">
		<p>Write a comment...</p>
		<div className="flex">
			<HoverableIcon icon={IoIosAttach} onClick={() => {}} size={22} />
			<HoverableIcon icon={BsEmojiSmile} onClick={() => {}} size={22} />
			<HoverableIcon icon={IoImageOutline} onClick={() => {}} size={22} />
		</div>
	</div>

	const queryClient = useQueryClient()

	const { isPending, mutate } = useMutation({
		mutationFn: async (newCommentData: TComment) => {
			const newComment = await axios.post('/api/user/comment', newCommentData)
			return newComment
		},
		onError: (error, variables, context) => {
			toast.error('Can not add comment. Try again later.')
			console.log(error)
			queryClient.setQueryData(['comments'], context?.comments)
			setLen(prev => prev - 1)
		},
		onMutate: async (newCommentData: TComment) => {
			await queryClient.cancelQueries({ queryKey: ['comments'] })

			const comments = queryClient.getQueryData(['comments']) as TComment[]
			if(comments) queryClient.setQueryData(['comments'], [...comments, newCommentData].reverse())

			toast.success('Comment successfully.')
			setCommentValue('')
			setLen(prev => prev + 1)

			return { comments }
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['posts'], exact: true })
		}
	})

	const handleSubmit = () => {
		const picture = user?.picture as string
		
		mutate({
			body: commentValue,
			picture: !picture ? '' : picture,
			name: user?.name,
			postId: post.id as string,
			userId: user?.id,
			userCommentFromId: [],
			userCommentToId: [],
			likers: [],
			createdAt: new Date()
		})
	}

	return <div onClick={handleClick} className={`${hovered ? 'cursor-default' : 'pointer'} w-full card mt-6`}>
		<div className="p-6">
			<div className="v-center-bet mb-6">
				<div className="v-center">
					<ProfilePicture picture={post?.picture} />
					<div className="ml-3">
						<Button>
							<p className="font-bold pointer hover:underline">{post?.name}</p>
						</Button>
						<p className="text-[13px] text-vio pointer hover:underline">{format(post?.createdAt as Date, "dd MMMM 'at' hh:mm aa")}</p>
					</div>
				</div>
				<Button>
					<HoverableIcon icon={BsThreeDots} onClick={() => {}} />
				</Button>
			</div>
			<div className="break-words">{post?.body}</div>
			{/* <div className="bg-vio w-full flex-1 mt-3 rounded-[5px]"></div> */}
		</div>
		<div className="f-center px-3 border-t border-b border-vio/30">
			<Button>
				<LikeButton post={post} user={user} />
			</Button>
			<CommentButton len={len} onClick={() => handleClick()} post={post} user={user} />
			<Button>
				<ShareButton post={post} user={user} />
			</Button>
			<Button>
				<SaveButton post={post} user={user} />
			</Button>
		</div>
		<div className="p-4">
			<div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className={`${isCommenting ? 'flex' : 'v-center'}`}>
				<ProfilePicture picture={user?.picture as string} />
				{isCommenting ? <>
					<div className="px-2 py-1 flex-1 ml-3 flex flex-col bg-lg rounded-[5px]">
						<textarea
							disabled={isPending}
							value={commentValue}
							onChange={e => setCommentValue(e.target.value)}
							placeholder="Write a comment..."
							className="flex-1 outline-none resize-none bg-transparent placeholder:text-dvio py-1">
						</textarea>
						<div className="w-full v-center-bet">
							<div className="flex">
								<HoverableIcon disabled={isPending} icon={MdDeleteOutline} onClick={() => setIsCommenting(false)} size={22} />
								<HoverableIcon disabled={isPending} icon={IoIosAttach} onClick={() => {}} size={22} />
								<HoverableIcon disabled={isPending} icon={BsEmojiSmile} onClick={() => {}} size={22} />
								<HoverableIcon disabled={isPending} icon={IoImageOutline} onClick={() => {}} size={22} />
							</div>
							<HoverableIcon
								disabled={isPending || commentValue.length < 1}
								icon={AiOutlineSend}
								onClick={isPending || commentValue.length < 1 ? () => null : handleSubmit}
							/>
						</div>
					</div>
				</> : <StartComment />}
			</div>
		</div>
	</div>
}
