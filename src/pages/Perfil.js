import React, { useState } from 'react'
import Header from '../components/Perfil/Header'
import Main from '../components/Perfil/Main'
import '../style/Perfil.css'

function Perfil(props) {
	let objeto = props.location.state[0]
	const [datos] = useState({
		email: objeto.email,
		nombre: objeto.nombre,
		institucion: objeto.institucion,
		profesion: objeto.profesion,
		avatar: objeto.avatar,
	})

	return (
		<div className='container-fluid perfil' id='perfil'>
			<Header
				institution={datos.institucion}
				nombre={datos.nombre}
				profesion={datos.profesion}
				avatar={datos.avatar}
			/>
			<Main email={datos.email}></Main>
		</div>
	)
}

export default Perfil
