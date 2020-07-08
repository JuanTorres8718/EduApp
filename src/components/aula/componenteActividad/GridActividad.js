import React from 'react'
import { Link } from 'react-router-dom'

const GridActividad = ({ fecha, identificador, nombre }) => {
	return (
		<div className='col-12 col-sm-6 col-lg-4'>
			<div className='grid-actividad text-center'>
				<p className='title-grid Englebert'>{nombre}</p>
				<small>Fecha Límite: {fecha}</small>
				<Link
					to={{
						pathname: '/Actividades/VerActividad',
						state: { id: identificador },
					}}
				>
					<button className='btn-actividad'>Ver más</button>
				</Link>
			</div>
		</div>
	)
}

export default GridActividad
