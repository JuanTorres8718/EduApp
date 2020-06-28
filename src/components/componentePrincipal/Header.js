import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripLines } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
	return (
		<nav
			className='navbar navbar-expand-lg fixed-top navbar-light'
			style={{ backgroundColor: '#6EB62C' }}
		>
			<span className='navbar-brand text-light mb-0 h1 titlefont'>EduApp</span>
			<button
				className='navbar-toggler'
				id='toggle_nav'
				type='button'
				data-toggle='collapse'
				data-target='#navbarNavAltMarkup'
				aria-controls='navbarNavAltMarkup'
				aria-expanded='false'
				aria-label='Toggle navigation'
			>
				<span>
					<FontAwesomeIcon
						className='text-light'
						icon={faGripLines}
					></FontAwesomeIcon>{' '}
				</span>
			</button>
			<div
				className='collapse navbar-collapse justify-content-end'
				id='navbarNavAltMarkup'
			>
				<div className='navbar-nav'>
					<Link className='nav-item nav-link text-light' to='/'>
						Home
					</Link>
					<a className='nav-link nav-item text-light' href='#experiencias'>
						Experiencias de usuarios
					</a>
					<a className='nav-link nav-item text-light' href='#sobrenosotros'>
						Sobre nosotros
					</a>
					<Link className='nav-link nav-item text-light' to='/Ingreso'>
						Ingresa
					</Link>
				</div>
			</div>
		</nav>
	)
}

export default Header
