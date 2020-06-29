import React, { useState } from 'react'
// import CircleComponent from '../circulo/ComponenteCirculo'
import '../../style/FormularioAula.css'
import axios from 'axios'

const FormularioAula = (props) => {
	const [Aula, setAula] = useState({
		Nombre: '',
		Descripcion: '',
		Grado: '',
		Participantes: 24,
	})

	const email = props.location.state.email

	const handleOnUpdateFiel = (value, field) => {
		setAula({
			...Aula,
			[field]: value,
		})
	}

	const onsubmit = (e) => {
		e.preventDefault()
		let identificador = ''
		axios.get('http://localhost:3004/usuario').then((res) => {
			for (let i = 0; i < res.data.length; i++) {
				if (email === res.data[i].email) {
					identificador = res.data[i].id
				}
			}
			axios
				.post('http://localhost:3004/aulas', {
					nombre_materia: Aula.Nombre,
					descripcion: Aula.Descripcion,
					grado: Aula.Grado,
					participantes: Aula.Participantes,
					usuario: identificador,
				})
				.then((res) => {
					props.history.push('/TusAulas', { email: email })
				})
		})
	}

	return (
		<div className='container-form pt-4'>
			<div className='form-grop text-center pt-5 pb-4'>
				<h4>Crea tu aula</h4>
			</div>
			<form
				onSubmit={onsubmit}
				// action="/AulaMatematicas"
				className='p-4'
			>
				<div className='form-group'>
					<label htmlFor='materia'>Nombre de la materia*</label>
					<input
						type='text'
						className='input-form'
						id='materia'
						onChange={(event) => {
							handleOnUpdateFiel(event.target.value, 'Nombre')
						}}
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='descripcion'>Descripción de la materia*</label>
					<textarea
						className='input-form'
						id='descripcion'
						rows='1'
						onChange={(event) => {
							handleOnUpdateFiel(event.target.value, 'Descripcion')
						}}
					></textarea>
				</div>
				<div className='form-group'>
					<label htmlFor='grado'>Grado*</label>
					<input
						type='text'
						className='input-form'
						id='grado'
						onChange={(event) => {
							handleOnUpdateFiel(event.target.value, 'Grado')
						}}
					/>
				</div>
				<div className='text-center'>
					<button type='submit' className='button-aula'>
						Crear
					</button>
				</div>
			</form>
		</div>
	)
}

export default FormularioAula
