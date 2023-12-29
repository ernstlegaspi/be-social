import bcrypt from 'bcrypt'
import CredentialsProvider from 'next-auth/providers/credentials'

import NextAuth, { AuthOptions } from 'next-auth'
import { PrismaAdapter } from '@next-auth/prisma-adapter'

import prisma from '@/lib/db'

export const authOptions: AuthOptions = {
	adapter: PrismaAdapter(prisma),
	debug: process.env.NODE_ENV === 'development',
	pages: {
		signIn: '/',
		signOut: '/'
	},
	session: {
		strategy: 'jwt'
	},
	secret: process.env.NEXTAUTH_SECRET,
	callbacks: {
		async jwt({ token }) {
			return { ...token }
		},
		async session({ session }) {
			return session
		}
	},
	providers: [
		CredentialsProvider({
			name: 'credentials',
			credentials: {
				email: { label: 'email', type: 'text' },
				password: { label: 'password', type: 'password' },
			},
			async authorize(credentials) {
				if(!credentials) return null

				if(!credentials.email || !credentials.password) return null

				const user = await prisma.user.findUnique({
					where: {
						email: credentials.email
					}
				})

				if(!user) throw new Error("User not existing")

				const comparePassword = await bcrypt.compare(credentials?.password, user.password)

				if(!comparePassword) return null

				delete (user as any).password

				return user
			}
		})
	]
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
