import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faGripLines,
	faUser,
	faQuestion,
	faBell,
} from '@fortawesome/free-solid-svg-icons'
import ModalAyuda from './componentNav/ModalAyuda'
import NavLista from './componentNav/NavLista'

const NavAula = () => {
	return (
		<nav
			className='navbar navbar-expand-lg navbar-light back-color'
			id='navbar-page-aula'
		>
			<a
				className='navbar-brand icon-text'
				href='/AulaMatematicas'
				id='home-page-aula'
			>
				<FontAwesomeIcon className='size-icon-aula' icon={faUser} />
				<p className='esconder'>Inicio</p>
			</a>
			<div
				className='content-buttons d-flex justify-content-between'
				id='noti-page-aula'
			>
				<a className='navbar-brand icon-text' href='/'>
					<FontAwesomeIcon className='size-icon-aula' icon={faBell} />
					<p className='esconder'>Notificaciones</p>
				</a>
				<a
					className='navbar-brand icon-text'
					data-toggle='modal'
					data-target='#modalQuestion'
					href='/'
				>
					<FontAwesomeIcon className='size-icon-aula' icon={faQuestion} />
					<p className='esconder'>Ayuda</p>
				</a>
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
				<NavLista />
			</div>
		</nav>
	)
}

export default NavAula
