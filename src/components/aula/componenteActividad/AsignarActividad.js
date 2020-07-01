import React, {useState} from 'react'
import NavAula from '../componentAula/NavAula'
import {Link} from 'react-router-dom'
import axios from 'axios'
import '../../../style/AsignarActividad.css'

const AsignarActividad = (props) => {
	console.log(props)
	const id = props.location.state.id
	const [Actividad, setActividad] = useState({
		Nombre: '',
		Descripcion: '',
		Fecha: '',
		Adjuntar: '' ,
	})

	const handleOnUpdateFiel = (value, field) => {
		setActividad({
			...Actividad,
			[field]: value,
		})
	}

	const onsubmit = (e) => {
		e.preventDefault()
		let identificador = ''
	
				axios
				.post('http://localhost:3004/Actividades', {
		      nombre_actividad: Actividad.Nombre,
					fecha_limite: Actividad.Fecha,
					descripcion: Actividad.Descripcion,
					aula: id,
				})
				.then((res) => {
					props.history.push('/Actividades', 
					{ id: id })
				})
			console.log(Actividad)
	}
	return (
		<div className='container-fluid text' id='cont-asignar'>
			<div className='fixed-top'>
				<NavAula />
			</div>			
			<div className='mt-5 pt-4 text-center'>		
				<h5 className='mb-4 Englebert text_title'>Crear nueva actividad</h5>
			</div>
			<form 
			onSubmit={onsubmit}
			// action='/Actividades'
			 className='p-4'>
				<div className='form-group'>
					<label htmlFor='materia'>Nombre de la actividad*</label>
					<input 
					type='text'
					className='input-form'
					id='materia' 
					onChange={(event) => {
						handleOnUpdateFiel(event.target.value, 'Nombre')
					}}/>
				</div>
				<div className='form-group'>
					<label htmlFor='descripcion'>Descripción de la actividad*</label>
					<textarea
					 className='input-form' 
					 id='descripcion'
					  rows='1'
						onChange={(event) => {
							handleOnUpdateFiel(event.target.value, 'Descripcion')
						}}></textarea>
				</div>
				<div className='form-group'>
					<label htmlFor='date'>Fecha limite de entrega*</label>
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
				<div className='form-group'>
					<label htmlFor='file'>Adjuntar algun documento.</label>
					{/* <input type='file' id='hiddenFileInput' /> */}
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
