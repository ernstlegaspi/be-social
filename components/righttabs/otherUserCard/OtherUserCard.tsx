'use client'

import axios from 'axios'
import toast from 'react-hot-toast'
import { useState } from "react"
import { useMutation } from '@tanstack/react-query'

import ProfilePicture from "@/components/ProfilePicture"

type Props = {
	user: { id: string, name: string, userName: string, picture: string | null }
	userId: string
}

type IDProps = {
	otherUserId: string
	userId: string
}

export default function OtherUserCard({ user, userId }: Props) {
	const [followHovered, setFollowHovered] = useState(false)

	const handleClick = () => {
		if(followHovered) return

		alert("Clicked")
	}

	const { isPending, mutate } = useMutation({
		mutationFn: async (newFollowing: IDProps) => {
			return axios.post('/')
		},
		onMutate: async (newFollowing: IDProps) => {
			
		}
	})

	return <div onClick={handleClick} className="w-full py-2 v-center-bet pointer transition-all hover:bg-vio/30 mt-4 px-4">
		<div className="v-center">
			<ProfilePicture picture={user?.picture as string} />
			<div className="ml-3 text-dark">
				<p className="font-medium">{user?.name}</p>
				<p className="text-[14px] text-vio">{user?.userName}</p>
			</div>
		</div>
		<div onClick={() => mutate({ otherUserId: user?.id, userId })} onMouseEnter={() => setFollowHovered(true)} onMouseLeave={() => setFollowHovered(false)}
			className="bg-vio rounded-full py-2 px-4 text-[14px] text-center text-white transition-all hover:bg-dvio">
			Follow
		</div>
	</div>
}
