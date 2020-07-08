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
		let idUsuario = 0
		axios.get('https://api-fake-eduapp.herokuapp.com/aulas').then((res) => {
			let aula = res.data
			for (let i = 0; i < aula.length; i++) {
				if (identificador === aula[i].id) {
					idUsuario = aula[i].usuario
				}
			}
			axios
				.get('https://api-fake-eduapp.herokuapp.com/usuario')
				.then((respuesta) => {
					let usuario = respuesta.data
					for (let i = 0; i < usuario.length; i++) {
						if (idUsuario === usuario[i].id) {
							array.push(usuario[i])
						}
					}
					setPerfil(array)
				})
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
					<FontAwesomeIcon icon={faFileSignature} /> Asignación de actividades
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
					className='drown-items text-light'
				>
					<FontAwesomeIcon icon={faCommentDots} /> Chat Group
				</Link>
			</li>
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
