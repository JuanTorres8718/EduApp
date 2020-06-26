import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faCog,
	faVideo,
	faCommentDots,
	faFileSignature,
	faCalendarAlt,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const NavLista = () => {
	return (
		<ul className='navbar-nav'>
			<li className='nav-item'>
				<Link to='/Actividades' className='drown-items'>
					<FontAwesomeIcon icon={faFileSignature} /> Asignacion de actividades
				</Link>
			</li>
			<li className='nav-item'>
				<Link to='/' className='drown-items'>
					<FontAwesomeIcon icon={faVideo} /> Video-Llamada
				</Link>
			</li>
			<li className='nav-item'>
				<Link to='/' className='drown-items'>
					<FontAwesomeIcon icon={faCommentDots} /> Chat Group
				</Link>
			</li>
			<li className='nav-item'>
				<Link to='/' className='drown-items'>
					<FontAwesomeIcon icon={faCalendarAlt} /> Calendario
				</Link>
			</li>
			<li className='nav-item'>
				<Link to='/TuAula/Ajustes' className='drown-items'>
					<FontAwesomeIcon icon={faCog} /> Ajustes
				</Link>
			</li>
		</ul>
	)
}

export default NavLista