import React, { Component } from 'react'
import Header from '../componentePrincipal/Header'
import axios from 'axios'

class Registro extends Component {
	constructor(props) {
		super(props)
		this.state = {
			nombres: '',
			apellidos: '',
			institucion: '',
			correo: '',
			contraseña: '',
			confirmar: '',
			numero: '',
		}
		this.handleValueRegister = this.handleValueRegister.bind(this)
		this.handleCreate = this.handleCreate.bind(this)
	}
	handleValueRegister(value, field) {
		this.setState({
			...this.state,
			[field]: value,
		})
	}

	handleCreate = (e) => {
		const {
			nombres,
			apellidos,
			institucion,
			correo,
			contraseña,
			confirmar,
			numero,
		} = this.state
		e.preventDefault()
		if (contraseña === confirmar) {
			axios
				.post('https://api-fake-eduapp.herokuapp.com/usuario', {
					nombre: `${nombres} ${apellidos}`,
					institucion: institucion,
					email: correo,
					password: contraseña,
					numero: numero,
					avatar: '',
				})
				.then((res) => {
					this.setState({
						nombres: '',
						apellidos: '',
						institucion: '',
						correo: '',
						contraseña: '',
						confirmar: '',
						numero: '',
					})
					this.props.history.push('/ingreso', 1)
				})
		} else {
			alert('Las contraseñas no coinciden')
		}
	}
	render() {
		return (
			<div className='fondo_registro'>
				<Header></Header>
				<div className='d-flex justify-content-center align-items-center vh-100'>
					<form
						className='row justify-content-center margen_header col-lg-5 col-md-6 col-sm-12 fondo_formulario col-10'
						onSubmit={this.handleCreate}
					>
						<h2 className='text-center mb-3 mt-3 col-12'>Regístrate</h2>
						<div className='col-md-6 col-6 mt-3'>
							<input
								type='text'
								className='input-form fondo_input'
								id='nombre'
								placeholder='Nombre'
								onChange={(e) => {
									this.handleValueRegister(e.target.value, 'nombres')
								}}
								required
							/>
							<div className='valid-tooltip'>Looks good!</div>
						</div>
						<div className='col-6 col-md-6 mt-3'>
							<input
								type='text'
								className='input-form fondo_input'
								id='apellidos'
								placeholder='Apellido'
								onChange={(e) => {
									this.handleValueRegister(e.target.value, 'apellidos')
								}}
								required
							/>
							<div className='valid-tooltip'>Looks good!</div>
						</div>
						<div className='col-12 mt-3'>
							<input
								type='text'
								className='input-form fondo_input'
								id='institucion'
								placeholder='Institución'
								onChange={(e) => {
									this.handleValueRegister(e.target.value, 'institucion')
								}}
								required
							/>
							<div className='invalid-tooltip'>
								Ingresa el nombre de una institución válida
							</div>
						</div>
						<div className='col-12 mt-3'>
							<input
								type='email'
								className='input-form fondo_input'
								id='correo'
								placeholder='Correo Electrónico'
								onChange={(e) => {
									this.handleValueRegister(e.target.value, 'correo')
								}}
								aria-describedby='emailHelp'
							/>
							<div className='invalid-tooltip'>Ingresa un correo válido</div>
						</div>
						<div className='col-md-12 mt-3'>
							<input
								type='password'
								className='input-form fondo_input'
								id='clave1'
								placeholder='Elije una contraseña'
								onChange={(e) => {
									this.handleValueRegister(e.target.value, 'contraseña')
								}}
								required
							/>
						</div>
						<div className='col-md-12 mt-3'>
							<input
								type='password'
								className='input-form fondo_input'
								id='clave2'
								placeholder='Confirma tu contraseña'
								onChange={(e) => {
									this.handleValueRegister(e.target.value, 'confirmar')
								}}
								required
							/>
						</div>
						<div className='col-md-12 mt-3'>
							<input
								type='number'
								className='input-form fondo_input'
								id='numero'
								placeholder='Número de celular'
								onChange={(e) => {
									this.handleValueRegister(e.target.value, 'numero')
								}}
								required
							/>
						</div>
						<div className='col-md-12 mt-3 '>
							<label className='ingresofont col-12'>
								<input type='radio' name='ingreso' disabled />
								Ingresar como estudiante
							</label>
							<label className='ingresofont col-12'>
								<input type='radio' name='ingreso' defaultChecked />
								Ingresar como docente
							</label>
						</div>
						<button
							className='btn fondo_btn mt-2 form-control ingresofont rounded mb-2 text-light'
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
