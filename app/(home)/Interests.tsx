'use client'

import axios from 'axios'
import toast from 'react-hot-toast'
import { useState } from 'react'
import { signIn } from 'next-auth/react'

import useIsInterests from "@/hooks/useIsInterests"
import useSignUpData from '@/hooks/useSignUpData'

export default function Interests() {
	const [isLoading, setIsLoading] = useState(false)
	const [selectedInterest, setSelectedInterest] = useState<string[]>([])
	const [unselected, setUnselected] = useState(false)
	const { setIsInterests } = useIsInterests()
	const { signUpData } = useSignUpData()

	const Interest = ({ text }: { text: string }) => {
		const handleClick = () => {
			if(selectedInterest.includes(text)) {
				const newInterest = [...selectedInterest]
				newInterest.splice(newInterest.indexOf(text), 1)
				setSelectedInterest(newInterest)
				setUnselected(true)

				return
			}

			const newInterest = [...selectedInterest]
			newInterest.push(text)
			setSelectedInterest(newInterest)
		}

		return <div onMouseLeave={() => setUnselected(false)} onClick={handleClick} className={`
			${selectedInterest.includes(text) ? 'bg-dvio text-white' : unselected ? '' : 'hover:bg-vio hover:text-white'}
			w-max border px-3 py-1 border-vio text-vio 
			rounded-full pointer transition-all
			mr-3 mt-3
		`}>
			{text}
		</div>
	}

	const InterestLabel = ({ text }: { text: string }) => <p className="font-bold mt-6">{text}</p>

	const Music = () => <>
		<InterestLabel text="Music" />
		<div className="flex flex-wrap">
			<Interest text="Jazz" />
			<Interest text="R&B" />
			<Interest text="Pop" />
			<Interest text="Rock" />
			<Interest text="Classical" />
			<Interest text="Hip-hop" />
			<Interest text="EDM" />
			<Interest text="Country" />
			<Interest text="Indie" />
			<Interest text="Metal" />
			<Interest text="Blues" />
			<Interest text="Reggae" />
			<Interest text="Folk" />
			<Interest text="Punk" />
			<Interest text="Alternative" />
			<Interest text="Gospel" />
			<Interest text="K-pop" />
			<Interest text="Latin" />
			<Interest text="Electronic" />
			<Interest text="World Music" />
		</div>
	</>

	const Movies = () => <>
		<InterestLabel text="Movies" />
		<div className="flex flex-wrap">
			<Interest text="Action" />
			<Interest text="Comedy" />
			<Interest text="Drama" />
			<Interest text="Romance" />
			<Interest text="Science Fiction" />
			<Interest text="Horror" />
			<Interest text="Documentary" />
			<Interest text="Animated" />
			<Interest text="Thriller" />
			<Interest text="Mystery" />
			<Interest text="Fantasy" />
			<Interest text="Historical" />
			<Interest text="Adventure" />
			<Interest text="Crime" />
			<Interest text="Family" />
			<Interest text="War" />
			<Interest text="Musical" />
			<Interest text="Western" />
			<Interest text="Martial Arts" />
			<Interest text="Superhero" />
		</div>
	</>

	const Books = () => <>
		<InterestLabel text="Books" />
		<div className="flex flex-wrap">
			<Interest text="Fiction" />
			<Interest text="Non-fiction" />
			<Interest text="Mystery/Thriller" />
			<Interest text="Science Fiction/Fantasy" />
			<Interest text="Romance" />
			<Interest text="Historical Fiction" />
			<Interest text="Biography" />
			<Interest text="Self-help" />
			<Interest text="Poetry" />
			<Interest text="Graphic Novels" />
			<Interest text="Philosophy" />
			<Interest text="True Crime" />
			<Interest text="Travel" />
			<Interest text="Classics" />
			<Interest text="Business" />
			<Interest text="Science" />
			<Interest text="Psychology" />
			<Interest text="History" />
			<Interest text="Religion/Spirituality" />
			<Interest text="Cookbooks" />
		</div>
	</>

	const Hobbies = () => <>
		<InterestLabel text="Hobbies" />
		<div className="flex flex-wrap">
			<Interest text="Travel" />
			<Interest text="Cooking" />
			<Interest text="Photography" />
			<Interest text="Painting/Drawing" />
			<Interest text="Gaming" />
			<Interest text="Fitness" />
			<Interest text="Hiking" />
			<Interest text="Gardening" />
			<Interest text="Yoga" />
			<Interest text="DIY/Crafts" />
			<Interest text="Fishing" />
			<Interest text="Bird Watching" />
			<Interest text="Camping" />
			<Interest text="Cycling" />
			<Interest text="Surfing" />
			<Interest text="Rock Climbing" />
			<Interest text="Pottery" />
			<Interest text="Collecting" />
			<Interest text="Model Building" />
			<Interest text="Home Decor" />
		</div>
	</>

	const Cuisine = () => <>
		<InterestLabel text="Cuisine" />
		<div className="flex flex-wrap">
			<Interest text="Italian" />
			<Interest text="Mexican" />
			<Interest text="Japanese" />
			<Interest text="Indian" />
			<Interest text="Thai" />
			<Interest text="Mediterranean" />
			<Interest text="Vegan/Vegetarian" />
			<Interest text="BBQ/Grilling" />
			<Interest text="Gluten-free" />
			<Interest text="Fusion" />
			<Interest text="French" />
			<Interest text="Chinese" />
			<Interest text="Korean" />
			<Interest text="Greek" />
			<Interest text="Brazilian" />
			<Interest text="Vietnamese" />
			<Interest text="African" />
			<Interest text="Caribbean" />
			<Interest text="Spanish" />
			<Interest text="Middle Eastern" />
		</div>
	</>

	const Sports = () => <>
		<InterestLabel text="Sports" />
		<div className="flex flex-wrap">
			<Interest text="Soccer/Football" />
			<Interest text="Basketball" />
			<Interest text="Tennis" />
			<Interest text="Swimming" />
			<Interest text="Running" />
			<Interest text="Cycling" />
			<Interest text="Golf" />
			<Interest text="Skiing/Snowboarding" />
			<Interest text="Martial Arts" />
			<Interest text="Yoga" />
			<Interest text="Volleyball" />
			<Interest text="Baseball/Softball" />
			<Interest text="Hockey" />
			<Interest text="Surfing" />
			<Interest text="Skateboarding" />
			<Interest text="Table Tennis" />
			<Interest text="Archery" />
			<Interest text="Climbing" />
			<Interest text="Water Polo" />
			<Interest text="Equestrian Sports" />
		</div>
	</>

	const TechAndGadgets = () => <>
		<InterestLabel text="Tech and Gadgets" />
		<div className="flex flex-wrap">
			<Interest text="Programming" />
			<Interest text="Video Games" />
			<Interest text="Gadgets and Gizmos" />
			<Interest text="Virtual Reality" />
			<Interest text="Augmented Reality" />
			<Interest text="AI and Machine Learning" />
			<Interest text="Mobile Apps" />
			<Interest text="Web Development" />
			<Interest text="Cybersecurity" />
			<Interest text="Data Science" />
			<Interest text="Cryptocurrency" />
			<Interest text="Wearable Tech" />
			<Interest text="Drones" />
			<Interest text="Robotics" />
			<Interest text="Internet of Things (IoT)" />
			<Interest text="3D Printing" />
			<Interest text="Space Exploration" />
			<Interest text="Gaming Consoles" />
			<Interest text="Computer Hardware" />
			<Interest text="Software Development" />
		</div>
	</>

	const ArtsAndCulture = () => <>
		<InterestLabel text="Arts and Culture" />
		<div className="flex flex-wrap">
			<Interest text="Theater" />
			<Interest text="Museums" />
			<Interest text="Art Galleries" />
			<Interest text="Dance" />
			<Interest text="Music Festivals" />
			<Interest text="Cultural Festivals" />
			<Interest text="Poetry Slams" />
			<Interest text="Cultural History" />
			<Interest text="Literature" />
			<Interest text="Film Festivals" />
			<Interest text="Fashion" />
			<Interest text="Sculpture" />
			<Interest text="Architecture" />
			<Interest text="Street Art" />
			<Interest text="Opera" />
			<Interest text="Photography Exhibitions" />
			<Interest text="Indigenous Arts" />
			<Interest text="Digital Art" />
			<Interest text="Performance Art" />
			<Interest text="Stand-up Comedy" />
		</div>
	</>

	const OutdoorActivities = () => <>
		<InterestLabel text="Outdoor Activities" />
		<div className="flex flex-wrap">
			<Interest text="Camping" />
			<Interest text="Fishing" />
			<Interest text="Boating" />
			<Interest text="Surfing" />
			<Interest text="Rock Climbing" />
			<Interest text="Cycling" />
			<Interest text="Bird Watching" />
			<Interest text="Beach Volleyball" />
			<Interest text="Picnics" />
			<Interest text="Canoeing/Kayaking" />
			<Interest text="Scuba Diving" />
			<Interest text="Geocaching" />
			<Interest text="Horseback Riding" />
			<Interest text="Ziplining" />
			<Interest text="Paragliding" />
			<Interest text="Skydiving" />
			<Interest text="Hot Air Ballooning" />
			<Interest text="Snorkeling" />
			<Interest text="Rafting" />
			<Interest text="Wildlife Safaris" />
		</div>
	</>

	const Gaming = () => <>
		<InterestLabel text="Gaming" />
		<div className="flex flex-wrap">
			<Interest text="PC Gaming" />
			<Interest text="Console Gaming" />
			<Interest text="Board Games" />
			<Interest text="Card Games" />
			<Interest text="Role-playing Games (RPGs)" />
			<Interest text="Strategy Games" />
			<Interest text="Puzzle Games" />
			<Interest text="Esports" />
			<Interest text="Mobile Gaming" />
			<Interest text="Retro Gaming" />
			<Interest text="Simulation Games" />
			<Interest text="Fighting Games" />
			<Interest text="Racing Games" />
			<Interest text="MMORPG" />
			<Interest text="Sandbox Games" />
			<Interest text="Adventure Games" />
			<Interest text="Indie Games" />
			<Interest text="Augmented Reality Games" />
			<Interest text="Virtual Reality Games" />
			<Interest text="Collectible Card Games (CCGs)" />
		</div>
	</>

	const handleSignUp = async () => {
		setIsLoading(true)

		try {
			await axios.post('/api/sign-up', { ...signUpData, interests: selectedInterest })
			await signIn("credentials", { ...signUpData })

			setIsLoading(false)
			toast.success('Register successfully.')
		}
		catch(error: any) {
			setIsLoading(false)

			switch(error.response.status) {
				case 400:
					toast.error('Invalid Credentials')
					break
				case 409:
					toast.error("Email is already existing.")
					break
				default:
					toast.error("Can not complete sign up. Try again later.")
			}
		}
	}

	return <div className="w-full h-full overflow-y-scroll p-4">
		<p className="font-bold text-20">Interests</p>
		<p className="text-gray-500 text-[15px]">Pick at least 5 interests</p>
		<Music />
		<Movies />
		<Books />
		<Hobbies />
		<Cuisine />
		<Sports />
		<TechAndGadgets />
		<ArtsAndCulture />
		<OutdoorActivities />
		<Gaming />
		<div className="w-full flex">
			<div onClick={() => setIsInterests(false)} className="w-full mt-6 py-2 text-center text-white bg-dvio rounded-[5px] pointer">Back</div>
			<div onClick={isLoading ? () => null : async () => handleSignUp()} className={`${selectedInterest.length > 4 && !isLoading ? 'bg-dvio pointer' : 'bg-dvio/50'} w-full mt-6 py-2 ml-3 text-center text-white rounded-[5px]`}>Sign Up</div>
		</div>
	</div>
}
