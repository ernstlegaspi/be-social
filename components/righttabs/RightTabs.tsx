import getUser from "@/actions/getUser"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"

import PostSomethingCard from "./PostSomethingCard"
import EventsCard from "./EventsCard"
import FollowOtherUsers from "./FollowOtherUsers"

export default async function RightTabs() {
	const session = await getServerSession(authOptions)
	const user = await getUser(session?.user?.email as string)

	return <div className="relative w-[20%] h-full py-[118px]">
		<div className="fixed w-[18.9%] h-full flex flex-col">
			<PostSomethingCard picture={user?.picture as string} />
			<EventsCard />
			<FollowOtherUsers />
		</div>
	</div>
}