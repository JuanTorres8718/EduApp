import React, { useState } from 'react'
import NavAula from '../componentAula/NavAula'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../../../style/AsignarActividad.css'

const AsignarActividad = (props) => {
	const [Actividad, setActividad] = useState({
		Nombre: '',
		Descripcion: '',
		Fecha: '',
		Adjuntar: '',
	})

	const [id] = useState(props.location.state.id)

	const handleOnUpdateFiel = (value, field) => {
		setActividad({
			...Actividad,
			[field]: value,
		})
	}

	const onsubmit = (e) => {
		e.preventDefault()
		axios
			.post('https://api-fake-eduapp.herokuapp.com/actividades', {
				nombre_actividad: Actividad.Nombre,
				fecha_limite: Actividad.Fecha,
				descripcion: Actividad.Descripcion,
				aula: id,
			})
			.then((res) => {
				setActividad({
					Nombre: '',
					Descripcion: '',
					Fecha: '',
					Adjuntar: '',
				})
				props.history.push('/Actividades', { id: id })
			})
	}
	return (
		<div className='container-fluid text' id='cont-asignar'>
			<div className='fixed-top'>
				<NavAula id={id} />
			</div>
			<div className='mt-5 pt-4 text-center'>
				<Link
					to={{
						pathname: '/Actividades',
						state: { id: id },
					}}
				>
					<FontAwesomeIcon className='arrow-asignar ' icon={faArrowLeft} />
				</Link>
				<h5 className='mb-4 Englebert text_title ml-4 mr-3'>
					Crear nueva actividad
				</h5>
			</div>
			<form onSubmit={onsubmit} className='p-4'>
				<div className='form-group'>
					<label htmlFor='materia'>Nombre de la actividad*</label>
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
					<label htmlFor='descripcion'>Descripción de la actividad*</label>
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
					<label htmlFor='date'>Fecha límite de entrega*</label>
					<input
						type='date'
						name='bday'
						min='2000-01-01'
						max='3000-12-31'
						className='form-control'
						id='date'
						onChange={(event) => {
							handleOnUpdateFiel(event.target.value, 'Fecha')
						}}
					/>
				</div>
				<div className='text-center'>
					<button
						type='submit'
						className='button-aula'
						id='btn-create-activity'
					>
						Crear Actividad
					</button>
				</div>
			</form>
		</div>
	)
}

export default AsignarActividad
