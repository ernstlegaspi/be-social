import { getServerSession } from "next-auth";
import ProfilePicture from "../ProfilePicture";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getUser from "@/actions/getUser";

export default async function FriendsBar() {
	const session = await getServerSession(authOptions)
	const user = await getUser(session?.user?.email as string)

	return <div className="relative z-0 w-[18%] pt-[94px]">
		<div className="bg-white h-full w-[18%] fixed">
			<p className="text-vio font-bold tracking-widest my-3 ml-4">FRIENDS</p>
			<div className="mx-4">
				<div className="v-center justify-between mb-5">
					<div className="v-center">
						<ProfilePicture picture={user?.picture as string} />
						<p className="ml-3">Ernst Legaspi</p>
					</div>
					<p className="text-green-500">Online</p>
				</div>
				<div className="v-center justify-between mb-5">
					<div className="v-center">
						<ProfilePicture picture={user?.picture as string} />
						<p className="ml-3">Ernst Legaspi</p>
					</div>
					<p className="text-green-500">Online</p>
				</div>
				<div className="v-center justify-between mb-5">
					<div className="v-center">
						<ProfilePicture picture={user?.picture as string} />
						<p className="ml-3">Ernst Legaspi</p>
					</div>
					<p className="text-green-500">Online</p>
				</div>
				<div className="v-center justify-between mb-5">
					<div className="v-center">
						<ProfilePicture picture={user?.picture as string} />
						<p className="ml-3">Ernst Legaspi</p>
					</div>
					<p className="text-green-500">Online</p>
				</div>
				<div className="v-center justify-between mb-5">
					<div className="v-center">
						<ProfilePicture picture={user?.picture as string} />
						<p className="ml-3">Ernst Legaspi</p>
					</div>
					<p className="text-green-500">Online</p>
				</div>
				<div className="v-center justify-between mb-5">
					<div className="v-center">
						<ProfilePicture picture={user?.picture as string} />
						<p className="ml-3">Ernst Legaspi</p>
					</div>
					<p className="text-green-500">Online</p>
				</div>
				<div className="v-center justify-between mb-5">
					<div className="v-center">
						<ProfilePicture picture={user?.picture as string} />
						<p className="ml-3">Ernst Legaspi</p>
					</div>
					<p className="text-green-500">Online</p>
				</div>
				<div className="v-center justify-between mb-5">
					<div className="v-center">
						<ProfilePicture picture={user?.picture as string} />
						<p className="ml-3">Ernst Legaspi</p>
					</div>
					<p className="text-green-500">Online</p>
				</div>
				<div className="v-center justify-between mb-5">
					<div className="v-center">
						<ProfilePicture picture={user?.picture as string} />
						<p className="ml-3">Ernst Legaspi</p>
					</div>
					<p className="text-green-500">Online</p>
				</div>
				<div className="v-center justify-between mb-5">
					<div className="v-center">
						<ProfilePicture picture={user?.picture as string} />
						<p className="ml-3">Ernst Legaspi</p>
					</div>
					<p className="text-green-500">Online</p>
				</div>
				<div className="v-center justify-between mb-5">
					<div className="v-center">
						<ProfilePicture picture={user?.picture as string} />
						<p className="ml-3">Ernst Legaspi</p>
					</div>
					<p className="text-green-500">Online</p>
				</div>
				<div className="v-center justify-between mb-5">
					<div className="v-center">
						<ProfilePicture picture={user?.picture as string} />
						<p className="ml-3">Ernst Legaspi</p>
					</div>
					<p className="text-green-500">Online</p>
				</div>
				<div className="v-center justify-between mb-5">
					<div className="v-center">
						<ProfilePicture picture={user?.picture as string} />
						<p className="ml-3">Ernst Legaspi</p>
					</div>
					<p className="text-green-500">Online</p>
				</div>
				<div className="v-center justify-between mb-5">
					<div className="v-center">
						<ProfilePicture picture={user?.picture as string} />
						<p className="ml-3">Ernst Legaspi</p>
					</div>
					<p className="text-green-500">Online</p>
				</div>
			</div>
		</div>
	</div>
}
