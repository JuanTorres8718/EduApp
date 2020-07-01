import React, {useState, useEffect} from 'react'
import NavAula from '../aula/componentAula/NavAula'
import { Link } from 'react-router-dom'
import '../../style/Actividades.css'
import axios from 'axios'
import GridActividad from './componenteActividad/GridActividad'

const Actividades = (props) => {
	const id= props.location.state.id
	const [Actividades, setActividades] = useState([])

	useEffect(() => {
			if (id !== undefined) {
				axios.get('http://localhost:3004/actividades').then((res) => {
					const info = res.data
					// console.log(info)
					let array = []			
					for (let i = 0; i < info.length; i++) {
						if (id === info[i].aula) {
							array.push(info[i])
						}
					}
					setActividades(array)
				})
			} else {
				props.history.push('/Ingreso')
			}
	})
	return (
		<div className='container-fluid' 
		id='cont-actividades'>
			<div className='fixed-top'>
				<NavAula />
			</div>
			<div className='mt-5 pt-4 text-center'>
				<h5 className='mb-4 Englebert text_title'>Actividades</h5>
				<Link
					to={{
						pathname: '/Actividades/AsignarActividad',
						state: {id: id},
					}}>
					<button className='btn-asignar'>Asignar nueva actividad</button>
				</Link>
			</div>
			<div className='row mt-5'>
			
				{Actividades.map((actividad) => {
					return (	
						<div className='col-12 col-sm-6 col-lg-4'>						
						<GridActividad 
							id={actividad.id}
							fecha={actividad.fecha_limite}
							descripcion ={actividad.descripcion}	
						/>
							</div>
						)
				})}			
			</div>
		</div>
	)
}

export default Actividades
