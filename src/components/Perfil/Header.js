import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Imagen from './Imagen'
import Logros from './Logros'
import TextHeader from './TextHeader'
import '../../style/Header.css'
import Avatar from '../../images/avatarPrueba.jpg'

const Header = ({ institution }) => {
	const [varStyle] = useState({
		styleAvatar: 'image',
	})
	return (
		<div className='row d-flex mt-3 ml-2 mr-2 header'>
			<TextHeader
				welcome='Hola'
				name='Juan Torres'
				profesion='Estudiante de 10 grado'
			></TextHeader>
			<Imagen imageUrl={Avatar} sty={varStyle.styleAvatar} />
			<section className='col-12 d-flex justify-content-between mt-2'>
				<p className='col-8 pl-0'>{institution}</p>
				<Logros />
			</section>
		</div>
	)
}

Header.propTypes = {
	welcome: PropTypes.string,
	name: PropTypes.string,
	profesion: PropTypes.string,
}

export default Header
