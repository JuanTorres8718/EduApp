import React from 'react'
import { Link } from 'react-router-dom'

const GridActividad = () => {
	return (
		<div className='grid-actividad text-center'>
			<p className='title-grid'>Actividad 1</p>
			<small>Fecha Limite: 05/08/2020</small>
			<Link to='/Actividades/VerActividad'>
				<button className='btn-actividad'>Ver mas</button>
			</Link>
		</div>
	)
}

export default GridActividad
