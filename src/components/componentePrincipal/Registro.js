import React, { Component } from 'react'
import Header from '../componentePrincipal/Header'

class Registro extends Component {
	state = {}
	render() {
		return (
			<div className='fondo_registro'>
				<Header></Header>
				<div className='container d-flex justify-content-center'>
					<form
						className='row justify-content-center margen_header col-lg-4 col-md-6 col-sm-12 fondo_formulario'
						novalidate
					>
						<h2 className='text-center mb-3 mt-3 titlefont'>
							Crea una cuenta y diviertete aprendiendo
						</h2>
						<div className='form-row'>
							<div className='col-md-6'>
								<label for='validationTooltip01' className='ingresofont'>
									Nombres
								</label>
								<input
									type='text'
									className='input-form fondo_input'
									id='validationTooltip01'
									required
								/>
								<div className='valid-tooltip'>Looks good!</div>
							</div>
							<div className='col-md-6'>
								<label for='validationTooltip02' className='ingresofont'>
									Apellidos
								</label>
								<input
									type='text'
									className='input-form fondo_input'
									id='validationTooltip02'
									required
								/>
								<div className='valid-tooltip'>Looks good!</div>
							</div>
						</div>
						<div className='form-row'>
							<div className='col-md-6'>
								<label for='validationTooltip03' className='ingresofont'>
									Institución
								</label>
								<input
									type='text'
									className='input-form fondo_input'
									id='validationTooltip03'
									required
								/>
								<div className='invalid-tooltip'>
									Ingresa el nombre de una institución válida
								</div>
							</div>
							<div className='col-md-6'>
								<label for='validationTooltip04' className='ingresofont'>
									Correo
								</label>
								<input
									type='email'
									className='input-form fondo_input'
									id='exampleInputEmail1'
									aria-describedby='emailHelp'
								/>
								<div className='invalid-tooltip'>Ingresa un correo válido</div>
							</div>
							<div className='col-md-12'>
								<label for='validationTooltip05' className='ingresofont'>
									Elije una contraseña
								</label>
								<input
									type='password'
									className='input-form fondo_input'
									id='validationTooltip05'
									required
								/>
							</div>
							<div className='col-md-12'>
								<label for='validationTooltip05' className='ingresofont'>
									Confirma tu contraseña
								</label>
								<input
									type='password'
									className='input-form fondo_input'
									id='validationTooltip05'
									required
								/>
							</div>
							<div className='col-md-12'>
								<label for='validationTooltip05' className='ingresofont'>
									Número de celular
								</label>
								<input
									type='number'
									className='input-form fondo_input'
									id='validationTooltip05'
									required
								/>
							</div>
							<div className='col-md-12 mt-2'>
								<label className='ingresofont'>
									<input type='radio' name='ingreso' checked />
									Ingresar como estudiante
								</label>
								<label className='ingresofont'>
									<input type='radio' name='ingreso' checked />
									Ingresar como docente
								</label>
							</div>
						</div>
						<button
							className='btn fondo_btn mt-2 form-control ingresofont rounded mb-2'
							type='submit'
						>
							Adelante
						</button>
					</form>
				</div>
			</div>
		)
	}
}

export default Registro
