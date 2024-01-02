import dynamic from 'next/dynamic'

import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'

const HomePage = dynamic(() => import("@/components/Feed/FeedPage"))
const Auth = dynamic(() => import("./(home)/Auth"))

export default async function Home() {
	const session = await getServerSession(authOptions)

	return <>
		{session ? <HomePage /> : <Auth />}
	</>
}