'use client'

import { signOut } from "next-auth/react"

export default function Test() {
	return <button onClick={async () => await signOut()}>Log out</button>
}
