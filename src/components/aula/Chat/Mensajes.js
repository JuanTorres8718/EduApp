import React, { useState } from 'react'
import Image from '../../Perfil/Imagen'
import Avatar from '../../../images/avatarPrueba.jpg'
import '../../../style/Mensajes.css'

const Mensajes = ({ mensaje }) => {
	const [varStyle] = useState({
		styleAvatar: 'circulo',
	})
	return (
		<div className='d-flex mensaje align-items-center m-3 p-3 rounded'>
			<Image imageUrl={Avatar} sty={varStyle.styleAvatar} className='' />
			<p className='m-2'>{mensaje}</p>
		</div>
	)
}

export default Mensajes
