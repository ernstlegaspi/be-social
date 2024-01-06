'use client'

import { useState } from "react"
import { IconType } from 'react-icons'

type InteractButtonProps = {
	active: boolean
	activeIcon: IconType
	hasMargin?: boolean
	hoverColor: string
	icon: IconType
	onClick: () => void
	otherColor: string
	text: string
}

export default function InteractButton({
	active,
	activeIcon: Active,
	hasMargin,
	hoverColor,
	icon: Icon,
	onClick,
	otherColor,
	text
}: InteractButtonProps) {
	const [hovered, setHovered] = useState(false)

	return <div onClick={onClick} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
		className={`${hovered || active ? otherColor : 'text-dark'} ${hasMargin ? 'mr-6' : ''} v-center pointer py-3`}>
		<div className={`
			${hovered ? `${hoverColor} rounded-full shadow` : ''}
			mr-[5px] p-2 transition-all
		`}>
			{active ? <Active size={22} /> : <Icon size={22} />}
		</div>
		<p>{text}</p>
	</div>
}
