import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faCog,
	faVideo,
	faCommentDots,
	faFileSignature,
	faCalendarAlt,
	faHouseUser,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { faHouseDamage } from '@fortawesome/free-solid-svg-icons'

const NavLista = ({ id }) => {
	const [identificador] = useState(id)
	return (
		<ul className='navbar-nav ' id='lista-page-aula'>
				{/* <li className='nav-item' aria-disabled >
				<Link
					to={{
						pathname: '/Perfil',
						state: { id: identificador },
					}}
					className='drown-items text-light '
				>
					<FontAwesomeIcon icon={faHouseUser} /> Perfil
				</Link>
			</li> */}
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
				<Link to='/TuAula/Chat' className='drown-items text-light'>
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
