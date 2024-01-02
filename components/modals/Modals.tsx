'use client'

import useAddPostModal from '@/hooks/useAddPostModal'
import dynamic from 'next/dynamic'

const AddPostModal = dynamic(() => import("./AddPostModal"))

export default function Modals({ user }: { user: User }) {
	const { isOpen } = useAddPostModal()

	if(!isOpen) return null

	return <>
		{isOpen ? <AddPostModal user={user} /> : null}
	</>
}
