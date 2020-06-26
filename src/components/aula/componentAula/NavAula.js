import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faGripLines,
	faUser,
	faQuestion,
	faBell,
} from '@fortawesome/free-solid-svg-icons'
import ModalQuestion from './componentNav/ModalQuestion'
import NavList from './componentNav/NavList'

const NavAula = () => {
	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-light'>
			<a className='navbar-brand' href='/'>
				<FontAwesomeIcon icon={faUser} />
			</a>
			<div className='content-buttons d-flex justify-content-between'>
				<a className='navbar-brand' href='/'>
					<FontAwesomeIcon icon={faBell} />
				</a>
				<a
					className='navbar-brand'
					data-toggle='modal'
					data-target='#modalQuestion'
					href='/'
				>
					<FontAwesomeIcon icon={faQuestion} />
				</a>
				<ModalQuestion />
				<button
					className='toggler'
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
			<div className='collapse navbar-collapse' id='navbarNav'>
				<NavList />
			</div>
		</nav>
	)
}

export default NavAula
