import { getServerSession } from "next-auth"
import UserCard from "./UserCard"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import getUser from "@/actions/getUser"
import LeftSidebarButtons from "./LeftSidebarButtons"

export default async function LeftSidebar() {
	const session = await getServerSession(authOptions)
	const user = await getUser(session?.user?.email as string)

	return <div className="relative z-20 w-[22%]">
		<div className="fixed w-[20%] mt-[95px] h-[90%] bg-white py-3">
			<UserCard user={user} />
			<LeftSidebarButtons />
		</div>
	</div>
}
