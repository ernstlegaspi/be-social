import ProfilePicture from "@/components/ProfilePicture";

export default async function OtherUserCard({ user }: { user: { name: string, userName: string, picture: string | null } }) {
	return <div className="w-full py-2 v-center-bet pointer transition-all hover:bg-vio/30 mt-4 px-4">
		<div className="v-center">
			<ProfilePicture picture={user?.picture as string} />
			<div className="ml-3 text-dark">
				<p className="font-medium">{user?.name}</p>
				<p className="text-[14px] text-vio">{user?.userName}</p>
			</div>
		</div>
		<div className="bg-vio rounded-full py-2 px-4 text-[14px] text-center text-white transition-all hover:bg-dvio">Follow</div>
	</div>
}