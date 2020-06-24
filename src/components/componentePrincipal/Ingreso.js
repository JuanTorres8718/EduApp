import React, { Component } from 'react'
import flores from '../../images/flower.jpg'
import { Link } from 'react-router-dom'

class Ingresar extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	render() {
		return (
			<div>
				<nav
					className='navbar navbar-expand-lg navbar-light'
					style={{ backgroundColor: '#e3f2fd' }}
				>
					<span className='navbar-brand mb-0 h1 titlefont'>
						Los deschabetados
					</span>
					<button
						class='navbar-toggler'
						type='button'
						data-toggle='collapse'
						data-target='#navbarNavAltMarkup'
						aria-controls='navbarNavAltMarkup'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span class='navbar-toggler-icon'></span>
					</button>
					<div class='collapse navbar-collapse' id='navbarNavAltMarkup'>
						<div class='navbar-nav'>
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
				<div className='abs-center'>
					<div className='container vh-100 row justify-content-center'>
						<form
							action='/perfil'
							className='row justify-content-center col-lg-4 col-md-6 col-sm-12 bordes'
						>
							<div className='color_registro w-100'>
								<h2 className='titlefont text-center'>Ingresa a tu cuenta</h2>
							</div>
							<div class='form-group col-sm-12'>
								<label for='exampleInputEmail1' className='generalfont'>
									Correo electrónico
								</label>
								<input
									type='email'
									class='form-control'
									id='exampleInputEmail1'
									aria-describedby='emailHelp'
								/>
							</div>
							<div class='form-group col-sm-12'>
								<label for='exampleInputPassword1' className='generalfont'>
									Contraseña
								</label>
								<input
									type='password'
									class='form-control'
									id='exampleInputPassword1'
								/>
							</div>
							<button
								type='submit'
								className='btn btn-success generalfont rounded mb-2'
							>
								Ingresar
							</button>
							<div className='text-center col-12'>
								<Link to='/Registro'>
									¿No tienes una cuenta? Registrate aquí
								</Link>
							</div>
							<div className='text-center mb-3 col-12'>
								<Link to='/'>¿Olvidaste tu contraseña?</Link>
							</div>
							<div className='container-fluid'>
								<img src={flores} alt='flores' className='w-100'></img>
							</div>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default Ingresar
