import React from 'react'
import { Link } from 'react-router-dom'

const GridActividad = ({id,fecha,descripcion,}) => {
	
	return (
		<div className='grid-actividad text-center'>
			<p className='title-grid Englebert'>Actividad {id}</p>
			<small>Fecha Limite: {fecha}</small>
			<Link 
				to={{
					pathname:'/Actividades/VerActividad',
					// state: { email: email },
				}}>
				<button className='btn-actividad'>Ver mas</button>
			</Link>
		</div>
	)
}

export default GridActividad
