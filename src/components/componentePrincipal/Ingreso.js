import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Header from './Header'

class Ingresar extends Component {
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			password: '',
		}
		this.handleValue = this.handleValue.bind(this)
		this.login = this.login.bind(this)
	}
	handleValue(e) {
		if (e.target.id === 'email') {
			this.setState({
				email: e.target.value,
			})
		} else {
			this.setState({
				password: e.target.value,
			})
		}
	}

	alerta() {
		if (this.props.location.state !== undefined) {
			return (
				<div className='alerta_ingreso' role='alert'>
					Registro exitoso!
				</div>
			)
		}
	}

	login(e) {
		const { email, password } = this.state
		let cont = 1
		e.preventDefault()
		axios.get('https://api-fake-eduapp.herokuapp.com/usuario').then((res) => {
			let usuario = res.data
			for (let i = 0; i < usuario.length; i++) {
				if (email === usuario[i].email && password === usuario[i].password) {
					this.props.history.push('/perfil', [
						{
							email: usuario[i].email,
							nombre: usuario[i].nombre,
							institucion: usuario[i].institucion,
							profesion: usuario[i].profesion,
							avatar: usuario[i].avatar,
						},
					])
					cont = 0
				}
			}
			if (cont === 1) {
				alert('Datos incorrectos')
			}
		})
	}

	render() {
		return (
			<div className='fondo_registro'>
				<Header></Header>
				<div className=' d-flex justify-content-center align-items-center vh-100'>
					{this.alerta()}
					<form
						onSubmit={this.login}
						className='row justify-content-center col-lg-5 col-md-6 col-sm-12 fondo_formulario col-10'
					>
						<h2 className=' mb-5 mt-3 text-center'>
							Ingresa a tu cuenta EduApp
						</h2>
						<div className='form-group col-sm-12 mb-5'>
							<label htmlFor='email' className='ingresofont'>
								Correo electrónico
							</label>
							<input
								type='email'
								className='input-form fondo_input'
								onChange={this.handleValue}
								id='email'
								aria-describedby='emailHelp'
							/>
						</div>
						<div className='form-group col-sm-12 mb-5'>
							<label htmlFor='password' className='ingresofont'>
								Contraseña
							</label>
							<input
								type='password'
								className='input-form fondo_input'
								onChange={this.handleValue}
								id='password'
							/>
						</div>
						<button
							type='submit'
							className='btn fondo_btn mt-2 form-control ingresofont rounded mb-2 text-light'
						>
							Ingresar
						</button>
						<div className='text-center mt-2 col-12 '>
							<Link to='/Registro' className='text-dark'>
								¿No tienes una cuenta? Regístrate aquí
							</Link>
						</div>
						<div className='text-center mt-2 mb-2 col-12'>
							<Link to='/' className='text-dark'>
								¿Olvidaste tu contraseña?
							</Link>
						</div>
					</form>
				</div>
			</div>
		)
	}
}

export default Ingresar
