import OtherUserCard from "./otherUserCard/OtherUserCard"

import getOtherUser from "@/actions/getOtherUsers"
import getUser from "@/actions/getUser"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"

export default async function FollowOtherUsers() {
	const session = await getServerSession(authOptions)
	const user = await getUser(session?.user?.email as string)
	const otherUsers = await getOtherUser(user?.id, user?.interests)

	return <div className="w-full flex-1 mt-6">
		<div className="w-full h-[79%] card py-4">
			<div className="w-full v-center-bet px-4">
				<p className="text-vio font-medium">Follow Other Users</p>
				<p className="text-vio underline pointer hover:text-dvio">See All</p>
			</div>
			<div>
				{!otherUsers ? null : 
				otherUsers?.map(otherUser => 
					<OtherUserCard key={otherUser.name} user={otherUser} />
				)}
			</div>
		</div>
	</div>
}
