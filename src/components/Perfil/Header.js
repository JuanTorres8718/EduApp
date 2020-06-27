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
		<div className='row d-flex mt-3  p-4 header'>
			<TextHeader
				welcome='Hola'
				name='Juan Torres'
				profesion='Estudiante de 10 grado'
			></TextHeader>
			<div className='col-12 col-md-4 d-flex justify-content-center'>
				<Imagen imageUrl={Avatar} sty={varStyle.styleAvatar} />
			</div>
			<section className='col-12 d-flex justify-content-between mt-2'>
				<p className='col-5 col-md-8 col-lg-8 col-sm-6  pl-0'>{institution}</p>
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
