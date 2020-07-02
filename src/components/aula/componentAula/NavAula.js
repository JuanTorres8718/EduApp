import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faGripLines,
	faUser,
	faQuestion,
	faBell,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import ModalAyuda from './componentNav/ModalAyuda'
import NavLista from './componentNav/NavLista'

const NavAula = ({ id }) => {
	return (
		<nav
			className='navbar navbar-expand-lg navbar-light back-color'
			id='navbar-page-aula'
		>
			<Link
				to={{
					pathname: '/AulaMatematicas',
					state: { keyI: id },
				}}
				className='navbar-brand icon-text text-light'
				id='icono-inicio'
			>
				<FontAwesomeIcon className='size-icon-aula' icon={faUser} />
				<p className='esconder'>Inicio</p>
			</Link>
			<div
				className='content-buttons d-flex justify-content-between'
				id='noti-page-aula'
			>
				<Link
					to={{
						pathname: '/AulaMatematicas',
						state: { keyI: id },
					}}
					className='navbar-brand icon-text text-light'
				>
					<FontAwesomeIcon className='size-icon-aula' icon={faBell} />
					<p className='esconder'>Notificaciones</p>
				</Link>
				<Link
					to={{
						pathname: '/Ayuda',
						state: { id: id },
					}}
					className='navbar-brand icon-text text-light'
				>
					<FontAwesomeIcon className='size-icon-aula' icon={faQuestion} />
					<p className='esconder'>Ayuda</p>
				</Link>
				<ModalAyuda />
				<button
					className='navbar-toggler'
					id='toggleAula'
					type='button'
					data-toggle='collapse'
					data-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<FontAwesomeIcon icon={faGripLines} />
				</button>
			</div>
			<div
				className='collapse navbar-collapse justify-content-end'
				id='navbarNav'
			>
				<NavLista id={id} />
			</div>
		</nav>
	)
}

export default NavAula
