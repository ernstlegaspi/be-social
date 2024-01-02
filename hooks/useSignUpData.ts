import { create } from 'zustand'

type Props = {
	signUpData: object,
	setSignUpData: (newData: object) => void
}

const useSignUpData = create<Props>(set => ({
	signUpData: { email: '', name: '', password: '' },
	setSignUpData: (newData: object) => set({ signUpData: newData })
}))

export default useSignUpData
