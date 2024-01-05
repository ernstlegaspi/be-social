'use client'

import { useQuery } from "@tanstack/react-query"

import getPostsPerInterests from "@/actions/getPostsPerInterests"
import useFilter from "@/hooks/useFilter"
import PostCard from "../PostCard"

export default function Feeds({ user }: { user: User }) {
	const { data } = useQuery({
		queryKey: ['posts'],
		queryFn: async () => {
			const posts = await getPostsPerInterests(user?.id, user?.interests)
			return posts
		}
	})

	const { filter } = useFilter()

	return <>
		{
			filter === 'For You' ?
				<>
					{
						!data || data.length < 1 ? <div className="text-dark font-medium">Your For You feed is empty.</div> : 
						<div>
							{data?.map(post => <PostCard key={post.id} post={post} user={user} />)}
						</div>
					}
				</>
			: <>
				Following
			</>
		}
	</>
}