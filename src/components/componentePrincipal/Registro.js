import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Registro extends Component {
	state = {}
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
					<div className='container row justify-content-center'>
						<form
							className='needs-validation row justify-content-center col-lg-6 col-sm-12 bordes'
							novalidate
						>
							<div className='form-row'>
								<div className='color_registro h-auto w-100'>
									<h2 className='text-center titlefont'>
										Crea una cuenta y diviertete aprendiendo
									</h2>
								</div>
								<div className='col-md-6 mt-4 mb-3'>
									<label for='validationTooltip01' className='generalfont'>
										Nombres
									</label>
									<input
										type='text'
										className='form-control'
										id='validationTooltip01'
										required
									/>
									<div className='valid-tooltip'>Looks good!</div>
								</div>
								<div className='col-md-6 mt-4 mb-3'>
									<label for='validationTooltip02' className='generalfont'>
										Apellidos
									</label>
									<input
										type='text'
										className='form-control'
										id='validationTooltip02'
										required
									/>
									<div className='valid-tooltip'>Looks good!</div>
								</div>
							</div>
							<div className='form-row'>
								<div className='col-md-6 mb-3'>
									<label for='validationTooltip03' className='generalfont'>
										Institución
									</label>
									<input
										type='text'
										className='form-control'
										id='validationTooltip03'
										required
									/>
									<div className='invalid-tooltip'>
										Ingresa el nombre de una institución válida
									</div>
								</div>
								<div className='col-md-6 mb-3'>
									<label for='validationTooltip04' className='generalfont'>
										Correo
									</label>
									<input
										type='email'
										className='form-control'
										id='exampleInputEmail1'
										aria-describedby='emailHelp'
									/>
									<div className='invalid-tooltip'>
										Ingresa un correo válido
									</div>
								</div>
								<div className='col-md-12 mb-3'>
									<label for='validationTooltip05' className='generalfont'>
										Elije una contraseña
									</label>
									<input
										type='password'
										className='form-control'
										id='validationTooltip05'
										required
									/>
								</div>
								<div className='col-md-12 mb-3'>
									<label for='validationTooltip05' className='generalfont'>
										Confirma tu contraseña
									</label>
									<input
										type='password'
										className='form-control'
										id='validationTooltip05'
										required
									/>
								</div>
								<div className='col-md-12 mb-3'>
									<label for='validationTooltip05' className='generalfont'>
										Número de celular
									</label>
									<input
										type='number'
										className='form-control'
										id='validationTooltip05'
										required
									/>
								</div>
								<div className='col-md-12 mb-3'>
									<label className='generalfont'>
										<input type='radio' name='ingreso' checked />
										Ingresar como estudiante
									</label>
									<label className='generalfont'>
										<input type='radio' name='ingreso' checked />
										Ingresar como docente
									</label>
								</div>
							</div>
							<button
								className='btn btn-success generalfont rounded mb-4'
								type='submit'
							>
								Adelante
							</button>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default Registro
