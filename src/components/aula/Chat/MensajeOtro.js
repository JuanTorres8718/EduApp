import React, { useState } from 'react'
import Image from '../../Perfil/Imagen'
import Avatar from '../../../images/avatarniña.jpg'
import '../../../style/Mensajes.css'

const MensajeOtro = ({ mensaje }) => {
	const [varStyle] = useState({
		styleAvatar: 'circulo',
	})
	return (
		<div className='d-flex mensaje align-items-center m-3 p-3 rounded'>
			<p className='m-2 col-7 col-md-10'>{mensaje}</p>
			<Image imageUrl={Avatar} sty={varStyle.styleAvatar} className='' />
		</div>
	)
}

export default MensajeOtro
