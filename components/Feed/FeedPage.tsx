import { dehydrate, HydrationBoundary } from "@tanstack/react-query"

import Feeds from "./Feeds"
import Stories from "./Stories"
import getQueryClient from "@/lib/getQueryClient"
import Filters from "./Filters"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import getUser from "@/actions/getUser"
import getPostsPerInterests from "@/actions/getPostsPerInterests"

export default async function HomePage() {
	const session = await getServerSession(authOptions)
	const user = await getUser(session?.user?.email as string)
	const queryClient = getQueryClient()

	await queryClient.prefetchQuery({
		queryKey: ['posts'],
		queryFn: async () => {
			const posts = await getPostsPerInterests(user?.id, user?.interests)
			return posts
		}
	})

	return <div className="h-full w-[40%] mt-[94px] relative z-10">
		<div className="h-full w-full py-6 pl-3 pr-6 relative">
			<Stories />
			<Filters />
			<HydrationBoundary state={dehydrate(queryClient)}>
				<Feeds user={user} />
			</HydrationBoundary>
		</div>
	</div>
}
