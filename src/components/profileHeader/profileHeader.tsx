'use client'
import { FC, useState } from 'react'
import cl from './profileHeader.module.scss'
import Image from 'next/image'
import PencilRedact from '../ui/pencil/pencil'

type props = {
	userAvatar: string
}
type contactInfo = {
	name: string
	descritpion: string
	id: number | string
	isRedact : boolean
	onClick?:()=>void
}

const ProfileHeader: FC<props> = ({ userAvatar }) => {
	const [contactInfo, setContactInfo] = useState<contactInfo[]>([
		{ name: 'username', descritpion: 'unknown',isRedact:true, id: 1 },
		{ name: 'email', descritpion: 'example@email.com',isRedact:true, id: 2 },
		{ name: 'created at', descritpion: 'aug 2024',isRedact:false, id: 3 },
	])
	return (
		<header className={cl.profile_header}>
			<div className={cl.avatar_nickname_container}>
				<div className={cl.avatar}>
					{(userAvatar && <Image src={userAvatar} alt='user avatar' />) || (
						<div className={cl.circle}></div>
					)}
					<PencilRedact top='-20px' />
				</div>
				<h2 className={cl.username}>
					username <PencilRedact />
				</h2>
			</div>
			<div className={cl.contact_info_container}>
				<ul className={cl.contact_info_list}>
					{contactInfo.map(item => {
						return (
							<li>
								<span className={cl.relative_span}>
									{item.name}: {item.descritpion}
									{item.isRedact && <PencilRedact width='25px' height='25px'/>}
								</span>
							</li>
						)
					})}
				
				</ul>
			</div>
			<div className={cl.logout_container}>
				<button className={cl.logout_button}>Logout</button>
			</div>
		</header>
	)
}

export default ProfileHeader
