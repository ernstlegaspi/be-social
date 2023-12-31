'use client'

import { IconType } from 'react-icons'
import { BiMessageSquareDots } from "react-icons/bi"
import { BsPersonAdd } from "react-icons/bs"
import { IoMdNotificationsOutline } from "react-icons/io"

export default function UserNav() {
	const Buttons = ({ hasNotification, icon: Icon, onClick }: { hasNotification: boolean, icon: IconType, onClick: () => void }) => {
		return <div onClick={onClick} className="relative pointer">
			<Icon size={24} />
			{hasNotification ? <div className="top-0 right-0 bg-ind p-[4px] rounded-full absolute z-10 mt-[-5px]"></div> : null}
		</div>
	}

	return <div className="text-vio v-center">
		<Buttons hasNotification={false} icon={BsPersonAdd} onClick={() => {}} />
		<div className="mr-6"></div>
		<Buttons hasNotification={false} icon={BiMessageSquareDots} onClick={() => {}} />
		<div className="mr-6"></div>
		<Buttons hasNotification={false} icon={IoMdNotificationsOutline} onClick={() => {}} />
	</div>
}
