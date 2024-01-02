'use client'

import dynamic from 'next/dynamic'

import useIsInterests from '@/hooks/useIsInterests'

const AuthForm = dynamic(() => import("./AuthForm"))
const Interests = dynamic(() => import("./Interests"))

export default function Form() {
	const { isInterests } = useIsInterests()

	return <div className="w-full h-full">
		{isInterests ? <Interests /> : <AuthForm />}
	</div>
}
