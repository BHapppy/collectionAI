import { FC, useEffect } from 'react'
import cl from '@/app/modules/authMenu/authMenu.module.scss'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useForm } from 'react-hook-form'
import axios from 'axios'

type registerForm = {
	email: string
	password: string
	username: string
	passwordConfirm: string
}

type serverAnswer = {
	data: {
		isSucces: boolean
		text: string
	}
	status: number
	statusText: string
}

type props = {
	setErrorDescription: (arg: any) => void
	toggle: () => void
}

const SignUp: FC<props> = ({ setErrorDescription, toggle }) => {
	const { register, handleSubmit, formState, watch, trigger } =
		useForm<registerForm>({
			mode: 'onChange',
		})

	async function onSubmit(postOnServer: registerForm) {
		const answer = axios.post<registerForm, serverAnswer>(
			'/api/register',
			JSON.stringify(postOnServer)
		)
	}
	const passwordWatch = watch('password')

	const emailError = formState.errors['email']?.message
	const usernameError = formState.errors['username']?.message
	const passwordError = formState.errors['password']?.message
	const passwordConfirmError = formState.errors['passwordConfirm']?.message

	useEffect(() => {
		setErrorDescription(
			Object.values(formState.errors).find(item => {
				return item.message !== ''
			})?.message
		)
	}, [emailError, passwordError, passwordConfirmError, usernameError])
	
	useEffect(() => {
		if (watch('passwordConfirm').length) {
			trigger('passwordConfirm')
		}
	}, [passwordWatch, trigger])
	return (
		<>
			<div className={cl.auth_menu}>
				<form className={cl.form_container} onSubmit={handleSubmit(onSubmit)}>
					<h1 className={cl.logotype}>Sign Up</h1>
					<div className={cl.relative_container}>
						<Input
							id='email'
							className={`${cl.input} ${emailError ? cl.invalid_value : ''}`}
							{...register('email', {
								required: 'Email field required',
								pattern: {
									value: /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/i,
									message: 'invalid email',
								},
							})}
						/>
						<label
							htmlFor='email'
							className={`${cl.label} ${watch('email') ? cl.onFocus : ''}`}
						>
							Email
						</label>
					</div>
					<div className={cl.relative_container}>
						<Input
							id='username'
							className={`${cl.input} ${usernameError ? cl.invalid_value : ''}`}
							{...register('username', {
								required: 'Username field required',
							})}
						/>
						<label
							htmlFor='username'
							className={`${cl.label} ${watch('username') ? cl.onFocus : ''}`}
						>
							Username
						</label>
					</div>
					<div className={cl.relative_container}>
						<Input
							id='password'
							className={`${cl.input} ${passwordError ? cl.invalid_value : ''}`}
							{...register('password', {
								required: 'Passowrd field required',
							})}
						/>
						<label
							htmlFor='password'
							className={`${cl.label} ${watch('password') ? cl.onFocus : ''}`}
						>
							password
						</label>
					</div>
					<div className={cl.relative_container}>
						<Input
							id='passwordConfirm'
							className={`${cl.input} ${
								passwordConfirmError ? cl.invalid_value : ''
							}`}
							{...register('passwordConfirm', {
								required: 'Passowrd must be confirm',
								validate: (arg: string) => {
									if (passwordWatch != arg) {
										return 'Your passwords do no match'
									}
								},
							})}
						/>
						<label
							htmlFor='passwordConfirm'
							className={`${cl.label} ${
								watch('passwordConfirm') ? cl.onFocus : ''
							}`}
						>
							Password confimiration
						</label>
					</div>
					<div className={cl.submit_container}>
						<Button className={cl.submit_button}>Enlist</Button>
						<p className={cl.footer_text}>
							<span className={cl.toggle} onClick={toggle}>
								Sign In
							</span>{' '}
							if you already have an account
						</p>
					</div>
				</form>
			</div>
		</>
	)
}

export default SignUp
