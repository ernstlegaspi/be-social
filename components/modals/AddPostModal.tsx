'use client'

import axios from "axios"
import toast from "react-hot-toast"
import { ChangeEvent, useState } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { CgClose } from "react-icons/cg"
import { IoImageOutline } from "react-icons/io5"

import { useAddPostModal } from "@/hooks/useToggleModal"
import HoverableIcon from "../HoverableIcon"

export default function AddPostModal({ user }: { user: User }) {
	const [data, setData] = useState({ body: '' })
	const [disabled, setDisabled] = useState(true)
	const [whiteHovered, setWhiteHovered] = useState(false)
	const { isOpen, close } = useAddPostModal()

	const queryClient = useQueryClient()

	const { isPending, mutate } = useMutation({
		mutationFn: async (newPost: Post) => {
			return axios.post('/api/post', newPost)
		},
		onError: (error, variables, context) => {
			toast.error("Can not add post. Try again later.")
			queryClient.setQueryData(['posts'], context?.posts)
		},
		onMutate: async (newPost: Post) => {
			await queryClient.cancelQueries({ queryKey: ['todos'] })

			const posts = queryClient.getQueryData(['posts']) as Post[]
			queryClient.setQueryData(['posts'], [...posts, newPost])

			return { posts }
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['posts'], exact: true })
			toast.success('Post added to feed!')
			setDisabled(true)
			setData({ body: '' })
		}
	})

	const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setData({ body: e.target.value })
		setDisabled(e.target.value === '')
	}

	const handleClick = () => {
		if(whiteHovered) return

		close()
	}

	const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
		e.preventDefault()
		
		const picture = !user?.picture ? '' : user?.picture as string
		
		mutate({
			interests: user?.interests,
			body: data.body,
			name: user?.name,
			picture,
			userId: user?.id,
			likers: []
		})
	}

	if(!isOpen) return null

	return <div onClick={handleClick} className="black-inset">
		<form onSubmit={handleSubmit} onMouseEnter={() => setWhiteHovered(true)} onMouseLeave={() => setWhiteHovered(false)} className="card w-[500px] h-[500px] flex flex-col">
			<div className="v-center-bet m-3 mb-2 ml-1">
				<p className="sub-label mt-[7px]">Add Post</p>
				<HoverableIcon icon={CgClose} onClick={isPending ? () => null : () => close()} size={22} />
			</div>
			<textarea disabled={isPending} maxLength={300} value={data.body} onChange={handleChange}
				className="outline-none resize-none flex-1 w-full p-3 text-dark border-b-2 border-t-2 border-vio/15">
			</textarea>
			<div className="m-3 v-center-bet">
				<HoverableIcon icon={IoImageOutline} onClick={() => {}} size={22} />
				<button type="submit" disabled={disabled || isPending}
					className={`
						${disabled || isPending ? 'bg-vio/50' : 'bg-vio hover:bg-dvio transition-all duration-300'}
						font-bold text-white rounded-full py-2 px-6
					`}>
					Post
				</button>
			</div>
		</form>
	</div>
}
