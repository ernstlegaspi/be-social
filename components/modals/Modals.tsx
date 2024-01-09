import dynamic from 'next/dynamic'

const AddPostModal = dynamic(() => import("./AddPostModal"))
const ViewPostModal = dynamic(() => import("./view_post/ViewPostModal"))

export default function Modals({ user }: { user: User }) {
	return <>
		<AddPostModal user={user} />
		<ViewPostModal />
	</>
}
