import React from 'react'
import Header from '../components/Perfil/Header'
import Main from '../components/Perfil/Main'
import '../style/Perfil.css'

function Perfil() {
	return (
		<div className='container-fluid perfil'>
			<Header institution='Bello' />
			<Main></Main>
		</div>
	)
}

export default Perfil
