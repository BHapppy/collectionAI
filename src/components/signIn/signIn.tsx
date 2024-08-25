import { FC, useEffect } from 'react'
import cl from '@/app/modules/authMenu/authMenu.module.scss'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useForm } from 'react-hook-form'

type authForm = {
	email: string
	password: string
}

type props = {
	setErrorDescription: (arg: any) => void
	toggle:()=>void
}

const SignIn: FC<props> = ({ setErrorDescription,toggle }) => {
	const { register, handleSubmit, formState } = useForm<authForm>({
		mode: 'onSubmit',
	})
	function onSubmit(data: authForm) {}

	const emailError = formState.errors['email']?.message
	const passwordError = formState.errors['password']?.message

	useEffect(() => {
		setErrorDescription(
			Object.values(formState.errors).find(item => {
				return item.message !== ''
			})?.message
		)
	}, [emailError,passwordError])
	return (
		<>
			<div className={cl.auth_menu}>
				<form className={cl.form_container} onSubmit={handleSubmit(onSubmit)}>
					<h1 className={cl.logotype}>Sign In</h1>
					<div className={cl.relative_container}>
						<Input
							placeholder='Email'
							className={`${cl.input} ${emailError ? cl.invalid_value : ''}`}
							{...register('email', {
								required: 'Email field required',
								pattern: {
									value: /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/i,
									message: 'invalid email',
								},
							})}
						/>
					</div>
					<div className={cl.relative_container}>
						<Input
							placeholder='Password'
							className={`${cl.input} ${passwordError ? cl.invalid_value : ''}`}
							{...register('password', {
								required: 'Passowrd field required',
							})}
						/>
					</div>
					<div className={cl.submit_container}>
						<Button className={cl.submit_button}>Sign In</Button>
						<p className={cl.footer_text}>
							<span className={cl.toggle} onClick={toggle}>Sign Up</span> if you don't have
							account yet
						</p>
					</div>
				</form>
			</div>
		</>
	)
}

export default SignIn
