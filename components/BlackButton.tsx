'use client'

import { IconType } from 'react-icons'
import { useState } from 'react'

type Props = {
	disabled?: boolean
	extraClass?: string
	icon?: IconType,
	iconSize?: number,
	label: string
	onClick: () => void
}

export default function BlackButton({ disabled, extraClass, icon: Icon, iconSize, label, onClick }: Props) {
	const [hovered, setHovered] = useState(false)

	return <div onClick={disabled ? () => {} : onClick} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className={`${extraClass} ${disabled ? 'bg-dark/50' : 'pointer bg-dark'} relative w-full py-2 rounded text-white`}>
		{Icon ? <div className="f-center">
			<Icon className="mr-1" size={iconSize} />
			<p className="text-center relative z-10">{label}</p>
		</div> : <p className="text-center relative z-10">{label}</p>}
		<div className={`${hovered && !disabled ? 'h-full' : 'h-0'} absolute w-full top-0 rounded transition-all bg-white/25`}></div>
	</div>
}
