import Image from 'next/image'

import placeholder from '@/public/img/placeholder.webp'

export default function ProfilePicture({ picture }: { picture: string }) {
	return <div className="w-[35px] h-[35px]">
		{picture ? 
		<p>Has Picture change later</p> : 
		<Image className="rounded-full"
			src={placeholder}
			alt="Placeholder User"
			style={{ width: '100%', height: '100%', objectFit: 'contain' }}
		/>}
	</div>
}
