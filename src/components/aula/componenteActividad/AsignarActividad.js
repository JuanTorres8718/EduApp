import React from 'react'
import NavAula from '../componentAula/NavAula'
import '../../../style/AsignarActividad.css'

const AsignarActividad = () => {
	return (
		<div className='container-fluid' id='cont-asignar'>
			<div className='fixed-top'>
				<NavAula />
			</div>
			<div className='mt-5 pt-4 text-center'>
				<h5 className='mb-4'>Crear nueva actividad</h5>
			</div>
			<form action='/Actividades' className='p-4'>
				<div className='form-group'>
					<label htmlFor='materia'>Nombre de la actividad*</label>
					<input type='text' className='input-form' id='materia' />
				</div>
				<div className='form-group'>
					<label htmlFor='descripcion'>Descripción de la actividad*</label>
					<textarea className='input-form' id='descripcion' rows='1'></textarea>
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
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='file'>Adjuntar algun documento.</label>
					<input type='file' id='hiddenFileInput' />
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
