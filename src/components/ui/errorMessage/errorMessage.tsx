import { AlertCircle } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

import { FC } from 'react'
import cl from './errorMessage.module.scss'
import { createPortal } from 'react-dom'

type Props = {
	errorDescription: string
	onElement:HTMLElement
	width?:string,
	height?:string
}
const ErrorMessage: FC<Props> = ({ errorDescription,onElement,width,height }) => {
	return createPortal(
		<Alert variant='destructive' className={cl.error} style={{width:width,height:height}}>
			<AlertCircle className='h-4 w-4' />
			<AlertTitle>Error</AlertTitle>
			<AlertDescription>{errorDescription}</AlertDescription>
		</Alert>,
		onElement
	)
}

export default ErrorMessage
