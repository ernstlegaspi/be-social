'use client'

import toast from 'react-hot-toast'
import { ChangeEvent, useState } from 'react'
import { signIn } from 'next-auth/react'

import BlackButton from '@/components/BlackButton'

export default function SignInForm({ setIsSignIn }: { setIsSignIn: React.Dispatch<React.SetStateAction<boolean>> }) {
	const [isLoading, setIsLoading] = useState(false)
	const [data, setData] = useState({ email: '', password: '' })

	const handleSignIn = async () => {
		const { email, password } = data

		const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/
		const emailRegex2 = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

		if(email === '' || password === '') {
			toast.error('All fields are required.')
			return
		}

		if(!emailRegex.test(email) || !emailRegex2.test(email)) {
			toast.error('Please enter a valid email.')
			return
		}

		if(password.length < 5) {
			toast.error('Please enter a valid password.')
			return
		}

		setIsLoading(true)

		try {
			const res = await signIn("credentials", { ...data, redirect: false })

			console.log(res)
			
			if(res?.status === 401) {
				toast.error("User is not existing")
				setIsLoading(false)

				return
			}

			toast.success("Logged in successfully")
			setIsLoading(false)
			await signIn("credentials", { ...data })
		}
		catch(e) {
			setIsLoading(false)
			toast.error('Can not logged in. Try again later.')
		}
	}

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setData({ ...data, [e.target.name]: e.target.value })
	}

	return <>
		<input disabled={isLoading} name="email" onChange={e => handleChange(e)} value={data.email} placeholder="Email" type="email" className={`${isLoading ? 'bg-slate-200' : ''} input`} />
		<input disabled={isLoading} name="password" onChange={e => handleChange(e)} value={data.password} placeholder="Password" type="password" className={`${isLoading ? 'bg-slate-200' : ''} mt-3 input`} />
		<BlackButton disabled={isLoading} extraClass='mt-6' label="Sign In" onClick={handleSignIn} />
		<p className="mt-2 text-[14px]">Don't have an account? <span onClick={isLoading ? () => null : () => setIsSignIn(false)} className={`${isLoading ? 'cursor-default' : 'pointer'} underline italic`}>Sign Up</span></p>
	</>
}
