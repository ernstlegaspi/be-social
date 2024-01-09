'use client'

import { IconType } from "react-icons"

type Props = {
	disabled?: boolean
	icon: IconType
	onClick: () => void
	size?: number
}

export default function HoverableIcon({ disabled, icon: Icon, onClick, size = 22 }: Props) {
	return <div onClick={onClick} className={`
		${disabled ? 'cursor-default text-gray-300' : 'pointer hover:bg-vio/30 text-vio'}
		p-2 rounded-full transition-all duration-300
	`}>
		<Icon size={size} />
	</div>
}
