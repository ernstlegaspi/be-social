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

	const Interest = ({ category, text }: { category: string, text: string }) => {
		const selected = `${category}-${text}`

		const handleClick = () => {
			if(selectedInterest.includes(selected)) {
				const newInterest = [...selectedInterest]
				newInterest.splice(newInterest.indexOf(selected), 1)
				setSelectedInterest(newInterest)
				setUnselected(true)

				return
			}

			const newInterest = [...selectedInterest]
			newInterest.push(selected)
			setSelectedInterest(newInterest)
		}

		return <div onMouseLeave={() => setUnselected(false)} onClick={handleClick} className={`
			${selectedInterest.includes(selected) ? 'bg-dvio text-white' : unselected ? '' : 'hover:bg-vio hover:text-white'}
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
			<Interest category="Music" text="Jazz" />
			<Interest category="Music" text="R&B" />
			<Interest category="Music" text="Pop" />
			<Interest category="Music" text="Rock" />
			<Interest category="Music" text="Classical" />
			<Interest category="Music" text="Hip-hop" />
			<Interest category="Music" text="EDM" />
			<Interest category="Music" text="Country" />
			<Interest category="Music" text="Indie" />
			<Interest category="Music" text="Metal" />
			<Interest category="Music" text="Blues" />
			<Interest category="Music" text="Reggae" />
			<Interest category="Music" text="Folk" />
			<Interest category="Music" text="Punk" />
			<Interest category="Music" text="Alternative" />
			<Interest category="Music" text="Gospel" />
			<Interest category="Music" text="K-pop" />
			<Interest category="Music" text="Latin" />
			<Interest category="Music" text="Electronic" />
			<Interest category="Music" text="World Music" />
		</div>
	</>

	const Movies = () => <>
		<InterestLabel text="Movies" />
		<div className="flex flex-wrap">
			<Interest category="Movies" text="Action" />
			<Interest category="Movies" text="Comedy" />
			<Interest category="Movies" text="Drama" />
			<Interest category="Movies" text="Romance" />
			<Interest category="Movies" text="Science Fiction" />
			<Interest category="Movies" text="Horror" />
			<Interest category="Movies" text="Documentary" />
			<Interest category="Movies" text="Animated" />
			<Interest category="Movies" text="Thriller" />
			<Interest category="Movies" text="Mystery" />
			<Interest category="Movies" text="Fantasy" />
			<Interest category="Movies" text="Historical" />
			<Interest category="Movies" text="Adventure" />
			<Interest category="Movies" text="Crime" />
			<Interest category="Movies" text="Family" />
			<Interest category="Movies" text="War" />
			<Interest category="Movies" text="Musical" />
			<Interest category="Movies" text="Western" />
			<Interest category="Movies" text="Martial Arts" />
			<Interest category="Movies" text="Superhero" />
		</div>
	</>

	const Books = () => <>
		<InterestLabel text="Books" />
		<div className="flex flex-wrap">
			<Interest category="Books" text="Fiction" />
			<Interest category="Books" text="Non-fiction" />
			<Interest category="Books" text="Mystery/Thriller" />
			<Interest category="Books" text="Science Fiction/Fantasy" />
			<Interest category="Books" text="Romance" />
			<Interest category="Books" text="Historical Fiction" />
			<Interest category="Books" text="Biography" />
			<Interest category="Books" text="Self-help" />
			<Interest category="Books" text="Poetry" />
			<Interest category="Books" text="Graphic Novels" />
			<Interest category="Books" text="Philosophy" />
			<Interest category="Books" text="True Crime" />
			<Interest category="Books" text="Travel" />
			<Interest category="Books" text="Classics" />
			<Interest category="Books" text="Business" />
			<Interest category="Books" text="Science" />
			<Interest category="Books" text="Psychology" />
			<Interest category="Books" text="History" />
			<Interest category="Books" text="Religion/Spirituality" />
			<Interest category="Books" text="Cookbooks" />
		</div>
	</>

	const Hobbies = () => <>
		<InterestLabel text="Hobbies" />
		<div className="flex flex-wrap">
			<Interest category="Hobbies" text="Travel" />
			<Interest category="Hobbies" text="Cooking" />
			<Interest category="Hobbies" text="Photography" />
			<Interest category="Hobbies" text="Painting/Drawing" />
			<Interest category="Hobbies" text="Gaming" />
			<Interest category="Hobbies" text="Fitness" />
			<Interest category="Hobbies" text="Hiking" />
			<Interest category="Hobbies" text="Gardening" />
			<Interest category="Hobbies" text="Yoga" />
			<Interest category="Hobbies" text="DIY/Crafts" />
			<Interest category="Hobbies" text="Fishing" />
			<Interest category="Hobbies" text="Bird Watching" />
			<Interest category="Hobbies" text="Camping" />
			<Interest category="Hobbies" text="Cycling" />
			<Interest category="Hobbies" text="Surfing" />
			<Interest category="Hobbies" text="Rock Climbing" />
			<Interest category="Hobbies" text="Pottery" />
			<Interest category="Hobbies" text="Collecting" />
			<Interest category="Hobbies" text="Model Building" />
			<Interest category="Hobbies" text="Home Decor" />
		</div>
	</>

	const Cuisine = () => <>
		<InterestLabel text="Cuisine" />
		<div className="flex flex-wrap">
			<Interest category="Cuisine" text="Italian" />
			<Interest category="Cuisine" text="Mexican" />
			<Interest category="Cuisine" text="Japanese" />
			<Interest category="Cuisine" text="Indian" />
			<Interest category="Cuisine" text="Thai" />
			<Interest category="Cuisine" text="Mediterranean" />
			<Interest category="Cuisine" text="Vegan/Vegetarian" />
			<Interest category="Cuisine" text="BBQ/Grilling" />
			<Interest category="Cuisine" text="Gluten-free" />
			<Interest category="Cuisine" text="Fusion" />
			<Interest category="Cuisine" text="French" />
			<Interest category="Cuisine" text="Chinese" />
			<Interest category="Cuisine" text="Korean" />
			<Interest category="Cuisine" text="Greek" />
			<Interest category="Cuisine" text="Brazilian" />
			<Interest category="Cuisine" text="Vietnamese" />
			<Interest category="Cuisine" text="African" />
			<Interest category="Cuisine" text="Caribbean" />
			<Interest category="Cuisine" text="Spanish" />
			<Interest category="Cuisine" text="Middle Eastern" />
		</div>
	</>

	const Sports = () => <>
		<InterestLabel text="Sports" />
		<div className="flex flex-wrap">
			<Interest category="Sports" text="Soccer/Football" />
			<Interest category="Sports" text="Basketball" />
			<Interest category="Sports" text="Tennis" />
			<Interest category="Sports" text="Swimming" />
			<Interest category="Sports" text="Running" />
			<Interest category="Sports" text="Cycling" />
			<Interest category="Sports" text="Golf" />
			<Interest category="Sports" text="Skiing/Snowboarding" />
			<Interest category="Sports" text="Martial Arts" />
			<Interest category="Sports" text="Yoga" />
			<Interest category="Sports" text="Volleyball" />
			<Interest category="Sports" text="Baseball/Softball" />
			<Interest category="Sports" text="Hockey" />
			<Interest category="Sports" text="Surfing" />
			<Interest category="Sports" text="Skateboarding" />
			<Interest category="Sports" text="Table Tennis" />
			<Interest category="Sports" text="Archery" />
			<Interest category="Sports" text="Climbing" />
			<Interest category="Sports" text="Water Polo" />
			<Interest category="Sports" text="Equestrian Sports" />
		</div>
	</>

	const TechAndGadgets = () => <>
		<InterestLabel text="Tech and Gadgets" />
		<div className="flex flex-wrap">
			<Interest category="TechGadgets" text="Programming" />
			<Interest category="TechGadgets" text="Video Games" />
			<Interest category="TechGadgets" text="Gadgets and Gizmos" />
			<Interest category="TechGadgets" text="Virtual Reality" />
			<Interest category="TechGadgets" text="Augmented Reality" />
			<Interest category="TechGadgets" text="AI and Machine Learning" />
			<Interest category="TechGadgets" text="Mobile Apps" />
			<Interest category="TechGadgets" text="Web Development" />
			<Interest category="TechGadgets" text="Cybersecurity" />
			<Interest category="TechGadgets" text="Data Science" />
			<Interest category="TechGadgets" text="Cryptocurrency" />
			<Interest category="TechGadgets" text="Wearable Tech" />
			<Interest category="TechGadgets" text="Drones" />
			<Interest category="TechGadgets" text="Robotics" />
			<Interest category="TechGadgets" text="Internet of Things (IoT)" />
			<Interest category="TechGadgets" text="3D Printing" />
			<Interest category="TechGadgets" text="Space Exploration" />
			<Interest category="TechGadgets" text="Gaming Consoles" />
			<Interest category="TechGadgets" text="Computer Hardware" />
			<Interest category="TechGadgets" text="Software Development" />
		</div>
	</>

	const ArtsAndCulture = () => <>
		<InterestLabel text="Arts and Culture" />
		<div className="flex flex-wrap">
			<Interest category="ArtsCulture" text="Theater" />
			<Interest category="ArtsCulture" text="Museums" />
			<Interest category="ArtsCulture" text="Art Galleries" />
			<Interest category="ArtsCulture" text="Dance" />
			<Interest category="ArtsCulture" text="Music Festivals" />
			<Interest category="ArtsCulture" text="Cultural Festivals" />
			<Interest category="ArtsCulture" text="Poetry Slams" />
			<Interest category="ArtsCulture" text="Cultural History" />
			<Interest category="ArtsCulture" text="Literature" />
			<Interest category="ArtsCulture" text="Film Festivals" />
			<Interest category="ArtsCulture" text="Fashion" />
			<Interest category="ArtsCulture" text="Sculpture" />
			<Interest category="ArtsCulture" text="Architecture" />
			<Interest category="ArtsCulture" text="Street Art" />
			<Interest category="ArtsCulture" text="Opera" />
			<Interest category="ArtsCulture" text="Photography Exhibitions" />
			<Interest category="ArtsCulture" text="Indigenous Arts" />
			<Interest category="ArtsCulture" text="Digital Art" />
			<Interest category="ArtsCulture" text="Performance Art" />
			<Interest category="ArtsCulture" text="Stand-up Comedy" />
		</div>
	</>

	const OutdoorActivities = () => <>
		<InterestLabel text="Outdoor Activities" />
		<div className="flex flex-wrap">
			<Interest category="OutdoorAct" text="Camping" />
			<Interest category="OutdoorAct" text="Fishing" />
			<Interest category="OutdoorAct" text="Boating" />
			<Interest category="OutdoorAct" text="Surfing" />
			<Interest category="OutdoorAct" text="Rock Climbing" />
			<Interest category="OutdoorAct" text="Cycling" />
			<Interest category="OutdoorAct" text="Bird Watching" />
			<Interest category="OutdoorAct" text="Beach Volleyball" />
			<Interest category="OutdoorAct" text="Picnics" />
			<Interest category="OutdoorAct" text="Canoeing/Kayaking" />
			<Interest category="OutdoorAct" text="Scuba Diving" />
			<Interest category="OutdoorAct" text="Geocaching" />
			<Interest category="OutdoorAct" text="Horseback Riding" />
			<Interest category="OutdoorAct" text="Ziplining" />
			<Interest category="OutdoorAct" text="Paragliding" />
			<Interest category="OutdoorAct" text="Skydiving" />
			<Interest category="OutdoorAct" text="Hot Air Ballooning" />
			<Interest category="OutdoorAct" text="Snorkeling" />
			<Interest category="OutdoorAct" text="Rafting" />
			<Interest category="OutdoorAct" text="Wildlife Safaris" />
		</div>
	</>

	const Gaming = () => <>
		<InterestLabel text="Gaming" />
		<div className="flex flex-wrap">
			<Interest category="Gaming" text="PC Gaming" />
			<Interest category="Gaming" text="Console Gaming" />
			<Interest category="Gaming" text="Board Games" />
			<Interest category="Gaming" text="Card Games" />
			<Interest category="Gaming" text="Role-playing Games (RPGs)" />
			<Interest category="Gaming" text="Strategy Games" />
			<Interest category="Gaming" text="Puzzle Games" />
			<Interest category="Gaming" text="Esports" />
			<Interest category="Gaming" text="Mobile Gaming" />
			<Interest category="Gaming" text="Retro Gaming" />
			<Interest category="Gaming" text="Simulation Games" />
			<Interest category="Gaming" text="Fighting Games" />
			<Interest category="Gaming" text="Racing Games" />
			<Interest category="Gaming" text="MMORPG" />
			<Interest category="Gaming" text="Sandbox Games" />
			<Interest category="Gaming" text="Adventure Games" />
			<Interest category="Gaming" text="Indie Games" />
			<Interest category="Gaming" text="Augmented Reality Games" />
			<Interest category="Gaming" text="Virtual Reality Games" />
			<Interest category="Gaming" text="Collectible Card Games (CCGs)" />
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
