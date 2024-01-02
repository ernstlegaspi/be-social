'use client'

import { IconType } from "react-icons"

type Props = {
	icon: IconType
	onClick: () => void
	size?: number
}

export default function HoverableIcon({ icon: Icon, onClick, size = 22 }: Props) {
	return <div onClick={onClick} className="p-2 rounded-full pointer transition-all duration-300 text-vio hover:bg-vio/30">
		<Icon size={size} />
	</div>
}
