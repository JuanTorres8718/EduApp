import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import EditarAjustes from '../aula/EditarAjustes'
import { Link } from 'react-router-dom'
import '../../style/Ajustes.css'

const Ajustes = (props) => {
	const [id] = useState(props.location.state.id)
	return (
		<div className='fondo_ajustes d-flex justify-content-center align-items-center vh-100 '>
			<div className='container-form pt-4 fondo_formularioAustes mt-4 col-10 col-md-8 col-lg-6'>
				<Link
					to={{
						pathname: '/AulaMatematicas',
						state: { keyI: id },
					}}
				>
					<FontAwesomeIcon className='back-arrow' icon={faArrowLeft} />
				</Link>
				<div className='form-grop text-center pt-5 pb-4 Englebert '>
					<h4 id='fontsizeTitle'>Ajustes de aula</h4>
				</div>
				<form action='/AulaMatematicas' className='p-4'>
					<div className='form-group fontsize'>
						<label htmlFor='materia'>Nombre de la materia*</label>
						<input
							type='text'
							className='input-form '
							id='materia'
							defaultValue='Matemáticas'
						/>
						<button
							type='button'
							className='icon-edit'
							data-toggle='modal'
							data-target='#modalMateria'
						>
							<FontAwesomeIcon icon={faPencilAlt} />
						</button>
						<div
							className='modal'
							tabIndex='-1'
							role='dialog'
							id='modalMateria'
						>
							<EditarAjustes
								name='Nombre de la materia'
								valueInput='Matemáticas'
							/>
						</div>
					</div>
					<div className='form-group'>
						<label htmlFor='descripcion-materia'>
							Descripción de la materia*
						</label>
						<textarea
							className='input-form '
							id='descripcion-materia'
							rows='1'
							defaultValue='Aprenderan operaciones matematicas, 
                        aritmeticas y logicas'
						></textarea>
						<button
							type='button'
							className='icon-edit'
							data-toggle='modal'
							data-target='#modalDescripcion'
						>
							<FontAwesomeIcon icon={faPencilAlt} />
						</button>
						<div
							className='modal'
							tabIndex='-1'
							role='dialog'
							id='modalDescripcion'
						>
							<EditarAjustes
								name='Descripción de la materia'
								valueInput='Aprenderan operaciones matematicas, aritmeticas y logicas'
							/>
						</div>
					</div>
					<div className='form-group'>
						<label htmlFor='institucion'>Institución Educativa*</label>
						<input
							type='text'
							className='input-form'
							id='institucion'
							defaultValue='Panchito'
						/>
						<button
							type='button'
							className='icon-edit'
							data-toggle='modal'
							data-target='#modalInstitucion'
						>
							<FontAwesomeIcon icon={faPencilAlt} />
						</button>
						<div
							className='modal'
							tabIndex='-1'
							role='dialog'
							id='modalInstitucion'
						>
							<EditarAjustes
								name='Institución Educativa'
								valueInput='Panchito'
							/>
						</div>
					</div>
					<div className='form-group'>
						<label htmlFor='grado'>Grado*</label>
						<input
							type='text'
							className='input-form'
							id='grado'
							defaultValue='Octavo grado'
						/>
						<button
							type='button'
							className='icon-edit'
							data-toggle='modal'
							data-target='#modalGrado'
						>
							<FontAwesomeIcon icon={faPencilAlt} />
						</button>
						<div className='modal' tabIndex='-1' role='dialog' id='modalGrado'>
							<EditarAjustes name='Grado' valueInput='Octavo grado' />
						</div>
					</div>
					<div className='text-center'>
						<button type='submit' className='button-aula'>
							Guardar
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Ajustes
