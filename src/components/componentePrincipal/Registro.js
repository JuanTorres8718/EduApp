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
				.post('http://localhost:3004/usuario', {
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
					this.props.history.push('/ingreso')
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
						className='row justify-content-center margen_header col-lg-4 col-md-6 col-sm-12 fondo_formulario'
						onSubmit={this.handleCreate}
						novalidate
					>
						<h2 className='text-center mb-3 mt-3 titlefont'>
							Crea una cuenta y diviertete aprendiendo
						</h2>
						<div className='form-row'>
							<div className='col-md-6'>
								<label htmlFor='nombre' className='ingresofont'>
									Nombres
								</label>
								<input
									type='text'
									className='input-form fondo_input'
									id='nombre'
									onChange={(e) => {
										this.handleValueRegister(e.target.value, 'nombres')
									}}
									required
								/>
								<div className='valid-tooltip'>Looks good!</div>
							</div>
							<div className='col-md-6'>
								<label htmlFor='apellidos' className='ingresofont'>
									Apellidos
								</label>
								<input
									type='text'
									className='input-form fondo_input'
									id='apellidos'
									onChange={(e) => {
										this.handleValueRegister(e.target.value, 'apellidos')
									}}
									required
								/>
								<div className='valid-tooltip'>Looks good!</div>
							</div>
						</div>
						<div className='form-row'>
							<div className='col-md-6'>
								<label htmlFor='institucion' className='ingresofont'>
									Institución
								</label>
								<input
									type='text'
									className='input-form fondo_input'
									id='institucion'
									onChange={(e) => {
										this.handleValueRegister(e.target.value, 'institucion')
									}}
									required
								/>
								<div className='invalid-tooltip'>
									Ingresa el nombre de una institución válida
								</div>
							</div>
							<div className='col-md-6'>
								<label htmlFor='correo' className='ingresofont'>
									Correo
								</label>
								<input
									type='email'
									className='input-form fondo_input'
									id='correo'
									onChange={(e) => {
										this.handleValueRegister(e.target.value, 'correo')
									}}
									aria-describedby='emailHelp'
								/>
								<div className='invalid-tooltip'>Ingresa un correo válido</div>
							</div>
							<div className='col-md-12'>
								<label htmlFor='clave1' className='ingresofont'>
									Elije una contraseña
								</label>
								<input
									type='password'
									className='input-form fondo_input'
									id='clave1'
									onChange={(e) => {
										this.handleValueRegister(e.target.value, 'contraseña')
									}}
									required
								/>
							</div>
							<div className='col-md-12'>
								<label htmlFor='clave2' className='ingresofont'>
									Confirma tu contraseña
								</label>
								<input
									type='password'
									className='input-form fondo_input'
									id='clave2'
									onChange={(e) => {
										this.handleValueRegister(e.target.value, 'confirmar')
									}}
									required
								/>
							</div>
							<div className='col-md-12'>
								<label htmlFor='numero' className='ingresofont'>
									Número de celular
								</label>
								<input
									type='number'
									className='input-form fondo_input'
									id='numero'
									onChange={(e) => {
										this.handleValueRegister(e.target.value, 'numero')
									}}
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
