'use client'

import toast from 'react-hot-toast'
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'

import BlackButton from '@/components/BlackButton'
import useIsInterests from '@/hooks/useIsInterests'
import useSignUpData from '@/hooks/useSignUpData'
import getUser from '@/actions/getUser'
import { signUpSchema } from '@/lib/schemas/schema'

export default function SignUpForm({ setIsSignIn }: { setIsSignIn: Dispatch<SetStateAction<boolean>> }) {
	const [confirmPassword, setConfirmPassword] = useState('')
	const [data, setData] = useState({ name: '', email: '', password: '' })
	const [isLoading, setIsLoading] = useState(false)
	const { setIsInterests } = useIsInterests()
	const { setSignUpData } = useSignUpData()

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setData({ ...data, [e.target.name]: e.target.value })
	}

	const handleNextButton = async () => {
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
			const user = await getUser(email)
			setIsLoading(false)

			if(user) {
				toast.error("Email is existing.")

				return
			}

			setIsInterests(true)
			setSignUpData(data)
		}
		catch(e) {
			setIsLoading(false)
			toast.error("Can not proceed. Try again later.")
		}
	}
	
	return <>
		<input disabled={isLoading} name="name" onChange={e => handleChange(e)} value={data.name} placeholder="Name or Full Name" type="text" className={`${isLoading ? 'bg-slate-200' : ''} input`} />
		<input disabled={isLoading} name="email" onChange={e => handleChange(e)} value={data.email} placeholder="Email" type="email" className={`${isLoading ? 'bg-slate-200' : ''} mt-3 input`} />
		<input disabled={isLoading} name="password" onChange={e => handleChange(e)} value={data.password} placeholder="Password" type="password" className={`${isLoading ? 'bg-slate-200' : ''} mt-3 input`} />
		<input disabled={isLoading} name="confirmPassword" onChange={e => setConfirmPassword(e.target.value)} value={confirmPassword} placeholder="Confirm Password" type="password" className={`${isLoading ? 'bg-slate-200' : ''} mt-3 input`} />
		<p className="mt-2 text-[14px]">Already have an account? <span onClick={() => setIsSignIn(true)} className="underline pointer italic">Sign In</span></p>
		<BlackButton disabled={isLoading} extraClass='mt-6' label="Next" onClick={handleNextButton} />
	</>
}
