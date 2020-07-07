import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import NavAula from '../componentAula/NavAula'
import '../../../style/VerActividad.css'

const VerActividad = (props) => {
	const id = props.location.state.id
	return (
		<div className='container-fluid' id='cont-ver-actividad'>
			<Link
				to={{
					pathname: '/Actividades',
					state: { id: id },
				}}
			>
				<FontAwesomeIcon className='back-activity' icon={faArrowLeft} />
			</Link>
			<div className='fixed-top'>
				<NavAula id={id} />
			</div>
			<div className='mt-5 pt-4 text-center'>
				<h5 className='mb-4'>Actividad 1</h5>
			</div>
			<div className='form-group'>
				<p>
					Descripción: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
			</div>
			<div className='form-group'>
				<small>Fecha límite: 04/05/2020</small>
			</div>
			<div className='form-group'>
				<h6>Estudiantes que han entregado:</h6>
				<ul className='list-group list-group-flush'>
					<li className='list-group-item d-flex justify-content-between'>
						Pepe Mujica
						<Link
							to={{
								pathname: '/Actividades/VerActividad/Calificaciones',
								state: { id: id },
							}}
						>
							<FontAwesomeIcon className='plus' icon={faPlusCircle} />
						</Link>
					</li>
					<li className='list-group-item d-flex justify-content-between'>
						Elon Musk
						<Link
							to={{
								pathname: '/Actividades/VerActividad/Calificaciones',
								state: { id: id },
							}}
						>
							<FontAwesomeIcon className='plus' icon={faPlusCircle} />
						</Link>
					</li>
					<li className='list-group-item d-flex justify-content-between'>
						France Urrutia
						<Link
							to={{
								pathname: '/Actividades/VerActividad/Calificaciones',
								state: { id: id },
							}}
						>
							<FontAwesomeIcon className='plus' icon={faPlusCircle} />
						</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default VerActividad
