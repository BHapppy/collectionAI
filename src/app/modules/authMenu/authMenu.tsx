'use client'
import { FC, MouseEvent, useState } from 'react'
import cl from './authMenu.module.scss'
import SignIn from '@/components/signIn/signIn'
import SignUp from '@/components/signUp/signUp'
import { Button } from '@/components/ui/button'
const AuthMenu: FC = () => {
	const [isSignUp, setIsSignUp] = useState(false)
	const choice = isSignUp ? 'Sign In' : 'Sign Up'
	function submit(e: MouseEvent<HTMLButtonElement> ) {
		e.preventDefault()
	}
	return (
		<div className={`${cl.auth_menu} ${isSignUp ? cl.sign_up : cl.sign_in}`}>
			<form className={cl.form_container}>
				<h1 className={cl.logotype}>{choice}</h1>
				{!isSignUp && <SignIn/>}
				{isSignUp && <SignUp/>}
				<div className={cl.submit_container}>
					<Button className={cl.submit_button} onClick={submit}>{choice}</Button>
					<p className={cl.footer_text}>
						<span
							onClick={() => setIsSignUp(prev => !prev)}
							className={cl.toggle}
						>
							{choice}
						</span>

						{isSignUp
							? " if you don't have an account yet."
							: ' if you already have an account'}
					</p>
				</div>
			</form>
		</div>
	)
}

export default AuthMenu
