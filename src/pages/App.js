import React from 'react'
import Principal from '../components/componentePrincipal/Paginaprincipal'
import { Link } from 'react-router-dom'
import '../style/App.css'
import '../style/Circle.css'

const App = () => {
	return (
		<section>
			<nav
				className='navbar navbar-expand-lg navbar-light'
				style={{ backgroundColor: '#e3f2fd' }}
			>
				<span className='navbar-brand mb-0 h1 titlefont'>
					Los deschabetados
				</span>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarNavAltMarkup'
					aria-controls='navbarNavAltMarkup'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
					<div className='navbar-nav'>
						<Link className='nav-item nav-link' to='/'>
							Home
						</Link>
						<Link className='nav-link nav-item' to='/Ingreso'>
							Ingresa
						</Link>
						<a className='nav-link nav-item' href='#experiencias'>
							Experiencias de usuarios
						</a>
						<a className='nav-link nav-item' href='#sobrenosotros'>
							Sobre nosotros
						</a>
					</div>
				</div>
			</nav>
			<Principal />
		</section>
	)
}

export default App
