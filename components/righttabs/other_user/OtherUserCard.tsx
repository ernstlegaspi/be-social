'use client'

import axios from 'axios'
import toast from 'react-hot-toast'
import { useState } from "react"
import { useMutation } from '@tanstack/react-query'

import ProfilePicture from "@/components/ProfilePicture"

type Props = {
	currentUser: string
	otherUser: { id: string, name: string, userName: string, picture: string | null }
}

type IDProps = {
	otherUserId: string
	userId: string
}

export default function OtherUserCard({ currentUser, otherUser }: Props) {
	const [followHovered, setFollowHovered] = useState(false)
	const [isFollowing, setIsFollowing] = useState(false)
	const [justFollowed, setJustFollowed] = useState(false)

	const handleClick = () => {
		if(followHovered) return

		alert("Clicked")
	}

	const handleFollow = async () => {
		setIsFollowing(true)
		setJustFollowed(true)

		try {
			await axios.post('/api/user/follow', { otherUserId: otherUser?.id, userId: currentUser })
		}
		catch(e) {
			alert("error")
			console.log(e)
			setIsFollowing(false)
			setJustFollowed(false)
		}
	}
	
	// const { isPending, mutate } = useMutation({
	// 	mutationFn: async (newFollowing: IDProps) => {
	// 		return axios.post('/')
	// 	},
	// 	onMutate: async (newFollowing: IDProps) => {
			
	// 	}
	// })

	return <div onClick={handleClick} className="w-full py-2 v-center-bet pointer transition-all hover:bg-vio/30 mt-4 px-4">
		<div className="v-center">
			<ProfilePicture picture={otherUser?.picture as string} />
			<div className="ml-3 text-dark">
				<p className="font-medium">{otherUser?.name}</p>
				<p className="text-[14px] text-vio">{otherUser?.userName}</p>
			</div>
		</div>
		<div onClick={handleFollow} onMouseEnter={() => setFollowHovered(true)} onMouseLeave={() => {
			setFollowHovered(false)

			if(justFollowed) setJustFollowed(false)
		}}
		// <div onClick={() => mutate({ otherUserId: user?.id, userId })} onMouseEnter={() => setFollowHovered(true)} onMouseLeave={() => setFollowHovered(false)}
			className={`
				${isFollowing && !followHovered || justFollowed ? 'bg-white text-vio border border-vio' : 'bg-vio text-white'}
				${justFollowed ? '' : 'transition-all hover:bg-dvio'}
				rounded-full py-2 px-4 text-[14px] text-center font-medium
			`}>
			{isFollowing && followHovered && !justFollowed ? 'Unfollow' : isFollowing ? 'Following' : 'Follow'}
		</div>
	</div>
}
