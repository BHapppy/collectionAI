import { ChangeEvent, FC, useState } from 'react'
import cl from '@/app/modules/authMenu/authMenu.module.scss'
import { Input } from '@/components/ui/input'



const SignUp: FC = ({}) => {
	const [emailValue, setEmailValue] = useState('')
	const [passwordValue, setPasswordValue] = useState('')
	const [confirmPasswordValue, setConfirmPasswordValue] = useState('')
	const [usernameValue, setUsernameValue] = useState('')

	function onInput(e: ChangeEvent<HTMLInputElement>) {
		switch (e.target.id) {
			case 'email':
				setEmailValue(e.target.value)
				break
			case 'password':
				setPasswordValue(e.target.value)
				break
			case 'username':
				setUsernameValue(e.target.value)
				break
			case 'confirmPassword':
				setConfirmPasswordValue(e.target.value)
				break
		}
	}
	return (
		<>
			<div className={cl.relative_container}>
				<Input
					className={cl.input}
					id='email'
					onInput={onInput}
					value={emailValue}
				/>
				<label
					htmlFor='email'
					className={`${cl.label} ${emailValue.length ? cl.onFocus : ''}`}
				>
					Email
				</label>
			</div>
			<div className={cl.relative_container}>
				<Input
					className={cl.input}
					id='username'
					onInput={onInput}
					value={usernameValue}
				/>
				<label
				htmlFor='username'
					className={`${cl.label} ${usernameValue.length ? cl.onFocus : ''}`}
				>
					Username
				</label>
			</div>
			<div className={cl.relative_container}>
				<Input
					className={cl.input}
					id='password'
					onInput={onInput}
					value={passwordValue}
				/>
				<label
					htmlFor='password'
					className={`${cl.label} ${passwordValue.length ? cl.onFocus : ''}`}
				>
					Password
				</label>
			</div>
			<div className={cl.relative_container}>
				<Input
					className={cl.input}
					id='confirmPassword'
					onInput={onInput}
					value={confirmPasswordValue}
				/>
				<label
				htmlFor='confirmPassword'
					className={`${cl.label} ${
						confirmPasswordValue.length ? cl.onFocus : ''
					}`}
				>
					Password confirmation
				</label>
			</div>
			
		</>
	)
}

export default SignUp
