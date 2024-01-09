'use client'

import { format } from 'date-fns'

import ProfilePicture from "./ProfilePicture"

type Props = {
	comment: TComment
	// post: Post
	// user: User
}

export default function CommentCard({ comment }: Props) {
	// export default function CommentCard({ comment, post, user }: Props) {
	return <div className="w-[95%] mx-auto bg-lg flex p-3 rounded-[5px] mt-3">
		<ProfilePicture picture={comment?.picture as string} />
		<div className="mx-3 w-full">
			<div className="flex">
				<p className="font-bold">{comment?.name}</p>
				<p className="text-[14px] text-dvio ml-2 mt-[2px]">{format(comment?.createdAt as Date, "hh:mm aa")}</p>
			</div>
			<p className="text-[14px] mb-3 break-words">{comment?.body}</p>
			<div className="flex text-[14px]">
				<div className="flex">
					<p className="text-[13px] mt-[2px] mr-1 pointer text-dvio">(5)</p>
					<p className="pointer hover:underline">Like</p>
				</div>
				<div className="flex ml-3">
					<p className="text-[13px] mt-[2px] mr-1 pointer text-dvio">(5)</p>
					<p className="pointer hover:underline">Comment</p>
				</div>
			</div>
		</div>
	</div>
}
