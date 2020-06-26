import React from 'react'
// import CircleComponent from '../circulo/ComponenteCirculo'
import '../../style/FormularioAula.css'

const FormularioAula = () => {
	return (
		<div className='container-form pt-4'>		
			<div className='form-grop text-center pt-5 pb-4'>
				<h4>Crea tu aula</h4>
			</div>
			<form action='/AulaMatematicas' className='p-4'>
				<div className='form-group'>
					<label htmlFor='materia'>Nombre de la materia*</label>
					<input type='text' className='input-form' id='materia' />
				</div>
				<div className='form-group'>
					<label htmlFor='descripcion'>Descripción de la materia*</label>
					<textarea className='input-form' id='descripcion' rows='1'></textarea>
				</div>
				<div className='form-group'>
					<label htmlFor='institucion'>Institución Educativa*</label>
					<input type='password' className='input-form' id='institucion' />
				</div>
				<div className='form-group'>
					<label htmlFor='grado'>Grado*</label>
					<input type='password' className='input-form' id='grado' />
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