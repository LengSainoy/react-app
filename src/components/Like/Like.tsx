import { useState } from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

interface Props {
	onClick: () => void
}

const Like = ({ onClick }: Props) => {
	const [isSelected, setSelected] = useState(false)
	const toggle = () => {
		setSelected(!isSelected)
    onClick()
	}
	const size = 40

	if (isSelected) return <AiFillHeart color='#F08080' size={size} onClick={toggle} />
	else return <AiOutlineHeart size={size} onClick={toggle} />
}

export default Like
