import { dehydrate, HydrationBoundary } from "@tanstack/react-query"

import Feeds from "./Feeds"
import Stories from "./Stories"
import getQueryClient from "@/lib/getQueryClient"
import Filters from "./Filters"

export default async function HomePage() {
	const queryClient = getQueryClient()

	// queryClient.prefetchQuery({
	// 	queryKey: ['posts'],
	// 	queryFn: async () => {
	// 		return
	// 	}
	// })
	
	return <div className="h-full w-[40%] mt-[94px] relative z-10">
		<div className="h-full w-full py-6 pl-3 pr-6 relative">
			<Stories />
			<Filters />
			<HydrationBoundary state={dehydrate(queryClient)}>
				<Feeds />
			</HydrationBoundary>
		</div>
	</div>
}
