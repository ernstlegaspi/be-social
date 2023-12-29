'use client'

import axios from 'axios'
import toast from 'react-hot-toast'
import { ChangeEvent, useState } from 'react'
import { signIn } from 'next-auth/react'

import BlackButton from '@/components/BlackButton'
import { signUpSchema } from '@/lib/schemas/schema'

export default function SignUpForm({ setIsSignIn }: { setIsSignIn: React.Dispatch<React.SetStateAction<boolean>> }) {
	const [confirmPassword, setConfirmPassword] = useState('')
	const [data, setData] = useState({ name: '', email: '', password: '' })
	const [isLoading, setIsLoading] = useState(false)

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setData({ ...data, [e.target.name]: e.target.value })
	}

	const handleSignUp = async () => {
		const { name, email, password } = data

		const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/
		const emailRegex2 = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
		
		const nameRegex = /^[a-zA-Z\s]+$/

		const { success } = signUpSchema.safeParse({ ...data, confirmPassword })

		if(!success) {
			toast.error('All forms are required.')
			return
		}

		if(!nameRegex.test(name)) {
			toast.error("Invalid name")
			return
		}

		if(!emailRegex.test(email) || !emailRegex2.test(email)) {
			toast.error('Enter a valid email.')
			return
		}

		if(password.length < 5 || confirmPassword.length < 5) {
			toast.error('Password or Confirm Password should be 5 or more')
			return
		}

		if(password !== confirmPassword) {
			toast.error('Password are not the same')
			return
		}

		setIsLoading(true)

		try {
			await axios.post('/api/sign-up', data)

			setIsLoading(false)

			await signIn("credentials", { ...data })
			toast.success('Register successfully.')
		}
		catch(error: any) {
			const code = error.respons.status

			setIsLoading(false)

			if(code === 409) {
				toast.error("Email is already existing.")
				return
			}

			if(code === 400) {
				toast.error('Invalid Credentials')
				return
			}

			toast.error("Can not complete sign up. Try again later.")
		}
	}
	
	return <>
		<input disabled={isLoading} name="name" onChange={e => handleChange(e)} value={data.name} placeholder="Name or Full Name" type="text" className={`${isLoading ? 'bg-slate-200' : ''} input`} />
		<input disabled={isLoading} name="email" onChange={e => handleChange(e)} value={data.email} placeholder="Email" type="email" className={`${isLoading ? 'bg-slate-200' : ''} mt-3 input`} />
		<input disabled={isLoading} name="password" onChange={e => handleChange(e)} value={data.password} placeholder="Password" type="password" className={`${isLoading ? 'bg-slate-200' : ''} mt-3 input`} />
		<input disabled={isLoading} name="confirmPassword" onChange={e => setConfirmPassword(e.target.value)} value={confirmPassword} placeholder="Confirm Password" type="password" className={`${isLoading ? 'bg-slate-200' : ''} mt-3 input`} />
		<p className="mt-2 text-[14px]">Already have an account? <span onClick={() => setIsSignIn(true)} className="underline pointer italic">Sign In</span></p>
		<BlackButton disabled={isLoading} extraClass='mt-6' label="Sign Up" onClick={handleSignUp} />
	</>
}
