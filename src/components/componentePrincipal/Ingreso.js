import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

class Ingresar extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	render() {
		return (
			<div className="vh-100 fondo_registro" >
				<Header></Header>
					<div className='container d-flex justify-content-center'>
						<form
							action='/perfil'
							className='row justify-content-center margen_header col-lg-4 col-md-6 col-sm-12 fondo_formulario'
						>
								<h2 className='titlefont mb-3 mt-3 text-center'>Ingresa a tu cuenta</h2>
							<div className='form-group col-sm-12'>
								<label for='exampleInputEmail1' className='ingresofont'>
									Correo electrónico
								</label>
								<input
									type='email'
									className='input-form fondo_input'
									id='exampleInputEmail1'
									aria-describedby='emailHelp'
								/>
							</div>
							<div class='form-group col-sm-12'>
								<label for='exampleInputPassword1' className='ingresofont'>
									Contraseña
								</label>
								<input
									type='password'
									className='input-form fondo_input'
									id='exampleInputPassword1'
								/>
							</div>
							<button
								type='submit'
								className='btn fondo_btn mt-2 form-control ingresofont rounded mb-2'
							>
								Ingresar
							</button>
							<div className='text-center mt-2 col-12'>
								<Link to='/Registro'>
									¿No tienes una cuenta? Registrate aquí
								</Link>
							</div>
							<div className='text-center mt-2 mb-2 col-12'>
								<Link to='/'>¿Olvidaste tu contraseña?</Link>
							</div>
						</form>
					</div>
				</div>
		)
	}
}

export default Ingresar
