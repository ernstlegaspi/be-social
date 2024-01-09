'use client'

import { useQuery } from '@tanstack/react-query'

import useClickedPost from '@/hooks/useClickedPost'
import useCurrentUser from '@/hooks/useCurrentUser'
import PostCard from '../../postcard/PostCard'
import getComments from '@/actions/getComments'
import CommentCard from '@/components/CommentCard'

export default function Post() {
	const { clickedPost } = useClickedPost()
	const { currentUser } = useCurrentUser()

	const { isLoading, data } = useQuery({
		queryKey: ['comments'],
		queryFn: async () => {
			const comments = await getComments(clickedPost?.id as string)
			return comments
		}
	})

	return <div className="black-inset">
		<div className="w-[650px] h-full scroll">
			<PostCard post={clickedPost} user={currentUser} />
			<div className="card w-full my-6">
				<p className="font-medium text-vio tracking-widest p-6">COMMENTS</p>
				{
					isLoading
						? null
						: data?.map(comment => <CommentCard key={comment.id} comment={comment as TComment} />)
				}
				<div className="h-6"></div>
			</div>
		</div>
	</div>
}
