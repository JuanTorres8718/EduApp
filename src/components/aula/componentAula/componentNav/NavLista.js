import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faCog,
	faVideo,
	faCommentDots,
	faFileSignature,
	faHouseUser,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import axios from 'axios'

const NavLista = ({ id }) => {
	const [identificador] = useState(id)
	const [perfil, setPerfil] = useState([])

	useEffect(() => {
		let array = []
		axios.get('https://api-fake-eduapp.herokuapp.com/usuario').then((res) => {
			let usuario = res.data
			for (let i = 0; i < usuario.length; i++) {
				if (identificador === usuario[i].id) {
					array.push(usuario[i])
				}
			}
			setPerfil(array)
		})
	}, [identificador])

	return (
		<ul className='navbar-nav ' id='lista-page-aula'>
			<li className='nav-item'>
				<Link
					to={{
						pathname: '/Perfil',
						state: perfil,
					}}
					className='drown-items text-light '
				>
					<FontAwesomeIcon icon={faHouseUser} /> Perfil
				</Link>
			</li>
			<li className='nav-item'>
				<Link
					to={{
						pathname: '/Actividades',
						state: { id: identificador },
					}}
					className='drown-items text-light'
				>
					<FontAwesomeIcon icon={faFileSignature} /> Asignacion de actividades
				</Link>
			</li>
			<li className='nav-item'>
				<Link
					to={{
						pathname: '/VideoLlamada',
						state: { id: identificador },
					}}
					className='drown-items text-light'
				>
					<FontAwesomeIcon icon={faVideo} /> Video-Llamada
				</Link>
			</li>
			<li className='nav-item'>
				<Link 
				to={{
					pathname: '/TuAula/Chat',
					state: { id: identificador },
				}}
				className='drown-items text-light'>
					<FontAwesomeIcon icon={faCommentDots} /> Chat Group
				</Link>
			</li>
			{/* <li className='nav-item'>
				<Link to='/AulaMatematicas' className='drown-items text-light'>
					<FontAwesomeIcon icon={faCalendarAlt} /> Calendario
				</Link>
			</li> */}
			<li className='nav-item'>
				<Link
					to={{
						pathname: '/TuAula/Ajustes',
						state: { id: identificador },
					}}
					className='drown-items text-light'
				>
					<FontAwesomeIcon icon={faCog} /> Ajustes
				</Link>
			</li>
		</ul>
	)
}

export default NavLista
