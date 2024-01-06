'use client'

import PostCard from "../PostCard"
import useFeedPosts from "@/hooks/useFeedPosts"

export default function Feeds({ user }: { user: User }) {
	const { posts } = useFeedPosts()

	return <>
		{
			!posts || posts.length < 1 ? <div className="text-dark font-medium">Your For You feed is empty.</div> : 
			<div>
				{posts?.map(post => <PostCard key={post.id} post={post} user={user} />)}
			</div>
		}
	</>
}
