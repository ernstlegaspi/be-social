'use client'

import axios from "axios"
import toast from "react-hot-toast"
import { ChangeEvent, useState } from "react"
import { CgClose } from "react-icons/cg"
import { IoImageOutline } from "react-icons/io5"

import useAddPostModal from "@/hooks/useAddPostModal"
import HoverableIcon from "../HoverableIcon"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export default function AddPostModal({ user }: { user: User }) {
	const [whiteHovered, setWhiteHovered] = useState(false)
	const [data, setData] = useState({ body: '' })
	const [disabled, setDisabled] = useState(true)
	const { close } = useAddPostModal()

	const handleClick = () => {
		if(whiteHovered) return

		close()
	}

	const queryClient = useQueryClient()

	const { isPending, mutate } = useMutation({
		mutationFn: async (newPost: any) => {
			return axios.post('/api/post', { body: newPost?.body, name: user?.name, userId: user?.id, picture: '' })
		},
		onError: (error, variables, context) => {
			toast.error("Has an error")
			console.log(error)
		},
		onMutate: async newPost => {
			const posts = queryClient.getQueryData(['posts']) as any
			queryClient.setQueryData(['posts'], [...posts, newPost])

			queryClient.invalidateQueries({ queryKey: ['posts'], exact: true })

			// return posts
		},
		onSuccess: () => {
			toast.success('Post added to feed!')
			setDisabled(true)
			setData({ body: '' })
		}
	})

	const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setData({ body: e.target.value })
		setDisabled(e.target.value === '')
	}

	const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
		e.preventDefault()
		mutate(data)
	}

	return <div onClick={handleClick} className="f-center inset-0 bg-dark/50 fixed z-40">
		<form onSubmit={handleSubmit} onMouseEnter={() => setWhiteHovered(true)} onMouseLeave={() => setWhiteHovered(false)} className="card w-[500px] h-[500px] flex flex-col">
			<div className="v-center-bet m-3 mb-2 ml-1">
				<p className="sub-label mt-[7px]">Add Post</p>
				<HoverableIcon icon={CgClose} onClick={() => close()} size={22} />
			</div>
			<textarea value={data.body} onChange={handleChange}
				className="outline-none resize-none flex-1 w-full p-3 text-dark border-b-2 border-t-2 border-vio/15">
			</textarea>
			<div className="m-3 v-center-bet">
				<HoverableIcon icon={IoImageOutline} onClick={() => {}} size={22} />
				<button type="submit" disabled={disabled} className={`${disabled ? 'bg-vio/50' : 'bg-vio hover:bg-dvio transition-all duration-300'} font-bold text-white rounded-full py-2 px-6`}>Post</button>
			</div>
		</form>
	</div>
}
