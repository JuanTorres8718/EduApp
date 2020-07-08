import React, { useState } from 'react'
import '../../style/FormularioAula.css'
import axios from 'axios'

const FormularioAula = (props) => {
	const [Aula, setAula] = useState({
		email: '',
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
		axios.get('https://api-fake-eduapp.herokuapp.com/usuario').then((res) => {
			for (let i = 0; i < res.data.length; i++) {
				if (email === res.data[i].email) {
					identificador = res.data[i].id
				}
			}
			axios
				.post('https://api-fake-eduapp.herokuapp.com/aulas', {
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
		<div className='container-form pt-4 aula'>
			<div className='form-grop text-center pt-5 pb-4 Englebert'>
				<h2>Crea tu aula</h2>
			</div>
			<form onSubmit={onsubmit} className='p-4'>
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
					<button type='submit' className='button-aula text-light'>
						Crear
					</button>
				</div>
			</form>
		</div>
	)
}

export default FormularioAula
