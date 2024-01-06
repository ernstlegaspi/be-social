'use client'

import { useRef } from 'react'
import { useQuery } from "@tanstack/react-query"

import getFollowingPosts from "@/actions/getFollowingPosts"
import getPostsPerInterests from "@/actions/getPostsPerInterests"
import useFeedPosts from "@/hooks/useFeedPosts"
import useFilter from "@/hooks/useFilter"

export default function Filters({ user }: { user: User }) {
	const isFollowing = useRef(false)
	const { filter, setFilter } = useFilter()
	const { setPosts } = useFeedPosts()

	const { refetch } = useQuery({
		queryKey: ['posts'],
		queryFn: async () => {
			const posts = await getPostsPerInterests(user?.id, user?.interests)
			setPosts(posts)
			return posts
		}
	})

	const { refetch: refetchFollowingPost } = useQuery({
		queryKey: ['posts'],
		queryFn: async () => {
			const posts = await getFollowingPosts(user?.id)
			return posts
		}
	})

	const FilterButton = ({ text }: { text: string }) => {
		const isActive = text === filter

		const handleClick = async () => {
			setFilter(text)
			isFollowing.current = !isFollowing.current

			if(isFollowing.current) {
				const { data } = await refetchFollowingPost()
				setPosts(data as Post[])
			}
			else {
				const { data } = await refetch()
				setPosts(data as Post[])
			}
		}
		
		return <p onClick={handleClick} className={`${isActive ? 'font-bold' : ''} pointer mr-4`}>
			{text}
		</p>
	}

	return <div className="w-full v-center-bet mt-6">
		<p className="text-vio text-20 font-bold tracking-widest">Feed</p>
		<div className="text-vio v-center">
			<FilterButton text="For You" />
			<FilterButton text="Following" />
		</div>
	</div>
}
