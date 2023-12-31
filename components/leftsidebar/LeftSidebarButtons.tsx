'use client'

import { IconType } from 'react-icons'
import { BsCalendar3Event } from "react-icons/bs"
import { LiaPeopleCarrySolid } from "react-icons/lia"
import { MdOutlineSpaceDashboard } from "react-icons/md"
import { PiTelevisionSimpleBold } from "react-icons/pi"
import { RiStore2Line } from "react-icons/ri"

type ButtonProps = {
	activeSize?: number
	icon: IconType
	isActive: boolean
	onClick: () => void
	size?: number
	text: string
}

export default function LeftSidebarButtons() {
	const Buttons = ({ activeSize = 26, icon: Icon, isActive, onClick, size = 24, text }: ButtonProps) => {
		return <div onClick={onClick} className={`
			${isActive ? 'text-vio font-bold vio-shadow w-[107%] bg-white rounded-r-[10px]' : 'text-dark hover:bg-vio/30 transition-all'}
			py-2 v-center relative overflow-x-hidden h-[50px] pointer mb-3
		`}>
			<div className="ml-[25px] v-center">
				{isActive ? <Icon size={activeSize} /> : <Icon size={size} />}
				<p className="ml-2">{text}</p>
			</div>
			<div className={`${isActive ? 'block' : 'hidden'} py-5 px-4 rounded absolute bg-vio ml-[-26px]`}></div>
		</div>
	}
	
	return <div className="w-full">
		<Buttons icon={MdOutlineSpaceDashboard} isActive={true} onClick={() => {}} text="Feed" />
		<Buttons icon={LiaPeopleCarrySolid} isActive={false} onClick={() => {}} text="Friends" />
		<Buttons activeSize={20} icon={BsCalendar3Event} isActive={false} onClick={() => {}} size={18} text="Events" />
		<Buttons icon={PiTelevisionSimpleBold} isActive={false} onClick={() => {}} text="Videos" />
		<Buttons icon={RiStore2Line} isActive={false} onClick={() => {}} text="Marketplace" />
	</div>
}
