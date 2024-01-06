import { getServerSession } from "next-auth"

import getOtherUser from "@/actions/getOtherUsers"
import getUser from "@/actions/getUser"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import OtherUserCard from "./other_user/OtherUserCard"

export default async function FollowOtherUsers() {
	const session = await getServerSession(authOptions)
	const user = await getUser(session?.user?.email as string)
	const otherUsers = await getOtherUser(user?.id, user?.followingIDs, user?.interests)
	const len = otherUsers.length

	let randomUsers: { id: string, name: string, userName: string, picture: string | null }[] = []

	if(len < 6) {
		randomUsers = otherUsers
	}
	else {
		let i = 0
		
		while(i < 6) {
			const rand = Math.floor(Math.random() * len)
			const user = otherUsers[rand]

			if(randomUsers.includes(user)) continue

			randomUsers.push(user)
			i++
		}
	}

	return <div className="w-full flex-1 mt-6">
		<div className="w-full h-[79%] card py-4">
			<div className="w-full v-center-bet px-4">
				<p className="text-vio font-medium">Follow Other Users</p>
				<p className="text-vio underline pointer hover:text-dvio">See All</p>
			</div>
			<div>
				{!randomUsers ? null : 
					randomUsers?.map(otherUser => 
						<OtherUserCard key={otherUser.name} currentUser={user?.id} otherUser={otherUser} />
					)
				}
			</div>
		</div>
	</div>
}
