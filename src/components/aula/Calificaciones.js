import React from 'react'
import tarea from '../../images/tarea.jpg'
import NavAula from './componentAula/NavAula'
import '../../style/Calificaciones.css'

const Calificaciones = () => {
	return (
		<div className='content-fluid' id='cont-calificaciones'>
			<div className='fixed-top'>
				<NavAula />
			</div>
			<div className='cont-name-student'>
				<p className='letter-name'>J</p>
				<p className='work-name'>Trabajo de : Juan Torres</p>
			</div>
			<div className='cont-img'>
				<img src={tarea} className='img-fluid' alt='work' />
			</div>
			<div className='date-send'>
				<small>
					Fecha de envio: 04/08/2020 <br />
					Fecha limite: 05/08/2020
				</small>
			</div>
			<div className='cont-comment'>
				<h6>Comentarios</h6>
				<textarea
					className='form-control'
					id='text-publicacion'
					rows='3'
					placeholder='Deja algún comentario'
				></textarea>
			</div>
			<button className='button-send'>Enviar</button>
		</div>
	)
}

export default Calificaciones
