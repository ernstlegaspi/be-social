import { HydrationBoundary, dehydrate } from "@tanstack/react-query"

import getComments from "@/actions/getComments"
import getQueryClient from "@/lib/getQueryClient"
import useClickedPost from "@/hooks/useClickedPost"
import ViewedPost from "./ViewedPost"

export default function ViewPostModal() {
	const queryClient = getQueryClient()

	queryClient.prefetchQuery({
		queryKey: ['comments'],
		queryFn: async () => {
			const { clickedPost } = useClickedPost()
			const comments = await getComments(clickedPost?.id as string)
			return comments
		}
	})

	return <>
		<HydrationBoundary state={dehydrate(queryClient)}>
			<ViewedPost />
		</HydrationBoundary>
	</>
}
