import React from 'react'
import NavAula from '../aula/componentAula/NavAula'
import { Link } from 'react-router-dom'
import '../../style/Actividades.css'
import GridActividad from './componenteActividad/GridActividad'

const Actividades = () => {
	return (
		<div className='container-fluid' id='cont-actividades'>
			<div className='fixed-top'>
				<NavAula />
			</div>
			<div className='mt-5 pt-4 text-center'>
				<h5 className='mb-4'>Actividades</h5>
				<Link to='/Actividades/AsignarActividad'>
					<button className='btn-asignar'>Asignar nueva actividad</button>
				</Link>
			</div>
			<div className='row mt-5'>
				<div className='col-12 col-sm-6 col-lg-4'>
					<GridActividad />
				</div>
				<div className='col-12 col-sm-6 col-lg-4'>
					<GridActividad />
				</div>
				<div className='col-12 col-sm-6 col-lg-4'>
					<GridActividad />
				</div>
				<div className='col-12 col-sm-6 col-lg-4'>
					<GridActividad />
				</div>
				<div className='col-12 col-sm-6 col-lg-4'>
					<GridActividad />
				</div>
				<div className='col-12 col-sm-6 col-lg-4'>
					<GridActividad />
				</div>
			</div>
		</div>
	)
}

export default Actividades
