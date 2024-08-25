'use client'
import { FC, useState } from 'react'
import SignIn from '@/components/signIn/signIn'
import SignUp from '@/components/signUp/signUp'
import ErrorMessage from '@/components/ui/errorMessage/errorMessage'

const AuthMenu: FC = () => {
	const [errorsDescription, setErrorDescription] = useState('')
	const [isSignIn, setIsSignIn] = useState(false)
	function toggle(){
		setIsSignIn(prev=>!prev)
	}
	return (
		<>
			{errorsDescription && (
				<ErrorMessage
					errorDescription={errorsDescription}
					onElement={document.getElementById('auth') as HTMLElement}
					width='500px'
				/>
			)}
			{!isSignIn && <SignUp setErrorDescription={setErrorDescription} toggle={toggle}/>}
			{isSignIn && <SignIn setErrorDescription={setErrorDescription} toggle={toggle}/>}
		</>
	)
}

export default AuthMenu
