import Image from 'next/image'

import homeBg from '@/public/img/homebg.webp'
import Form from './(home)/Form'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'

import HomePage from '@/components/HomePage'

export default async function Home() {
	const session = await getServerSession(authOptions)

	return <>
		{session ? <HomePage /> : <div className="w-full h-full f-center">
			<div className="card w-[1000px] h-[650px] shadow flex">
				<div className="w-[40%] h-full">
					<Form />
				</div>
				<div className="w-[60%] h-full f-center">
					<Image style={{ width: '100%', height: '100%', objectFit: 'fill' }} src={homeBg} alt="People" />
				</div>
			</div>
		</div>}
	</>
}