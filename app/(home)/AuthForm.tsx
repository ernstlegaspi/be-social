'use client'

import dynamic from 'next/dynamic'
import { useState } from 'react'
import { FaFacebookF, FaGoogle } from "react-icons/fa"

import BlackButton from '@/components/BlackButton'

const SignInForm = dynamic(() => import('./SignInForm'))
const SignUpForm = dynamic(() => import('./SignUpForm'))

export default function AuthForm() {
	const [isSignIn, setIsSignIn] = useState(true)

	return <div className="w-[80%] mx-auto h-full relative">
		<h1 className="ebold-40 text-center my-10">Huddle</h1>
		{isSignIn ? <SignInForm setIsSignIn={setIsSignIn} /> : <SignUpForm setIsSignIn={setIsSignIn} />}
		<div className="h-[1px] w-full bg-dark mt-6"></div>
		<div className="bg-white absolute z-10 mt-[-15px] left-[50%] translate-x-[-50%] px-2 rounded-full">or</div>
		<BlackButton extraClass='mt-6' icon={FaGoogle} iconSize={18} label={isSignIn ? "Sign in with Google" : "Sign up with Google"} onClick={() => {}} />
		<BlackButton extraClass='mt-3' icon={FaFacebookF} iconSize={18} label={isSignIn ? "Sign in with Facebook" : "Sign up with Facebook"} onClick={() => {}} />
	</div>
}
