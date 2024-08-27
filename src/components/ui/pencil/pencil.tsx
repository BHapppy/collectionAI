import { FC } from 'react'
import cl from './pensil.module.scss'
import { Pencil } from 'lucide-react'

type props = Partial<{
	onClick: () => void
	top: string
	right: string
	left: string
	bottom: string
    width:string,
    height:string
}>

const PencilRedact: FC<props> = ({ onClick, top, right, left, bottom,width,height }) => {
	return (
		<div
			className={cl.pencil}
			onClick={onClick}
			style={{ top: top, right: right, bottom: bottom, left: left ,width:width,height:height}}
		>
			<Pencil className={cl.redactor} color='#677479' />
		</div>
	)
}

export default PencilRedact
