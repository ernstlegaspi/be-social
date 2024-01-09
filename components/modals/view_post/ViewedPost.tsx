'use client'

import Post from './Post'
import { useViewPostModal } from '@/hooks/useToggleModal'

export default function ViewedPost() {
	const { isOpen } = useViewPostModal()

	return <>
		{isOpen ? <Post /> : null }
	</>
}
