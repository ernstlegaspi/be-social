'use client'

import ProfilePicture from "../ProfilePicture"

export default function UserCard({ user }: { user: User }) {
	return <div className="mb-3 pointer p-3 border-2 border-vio/15 rounded-xl w-[90%] mx-auto bg-lg flex">
		<ProfilePicture picture={user?.picture as string} />
		<div className="ml-3 text-dark">
			<p className="font-medium">{user?.name}</p>
			<p className="text-[14px] text-vio">{user?.userName}</p>
		</div>
	</div>
}
