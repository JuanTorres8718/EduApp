import React, { useState, useEffect } from 'react'
import IndividualAula from '../components/TusAulas/IndividualAula'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../style/TusAulas.css'
import '../style/AgregarAula.css'

const TusAulas = (props) => {
	const [Aulas, setAulas] = useState([])

	var email = props.location.state.email

	useEffect(() => {
		axios.get('http://localhost:3004/usuario').then((res) => {
			for (let i = 0; i < res.data.length; i++) {
				if (email === res.data[i].email) {
					var id = res.data[i].id
				}
			}
			if (id !== undefined) {
				axios.get('http://localhost:3004/aulas').then((res) => {
					const info = res.data
					let array = []
					for (let j = 0; j < info.length; j++) {
						if (id === info[j].usuario) {
							array.push(info[j])
						}
					}
					setAulas(array)
				})
			} else {
				props.history.push('/Ingreso')
			}
		})
	})

	return (
		<div>
			<div className='d-flex justify-content-around m-5'>
				<h1 className='text-center Englebert'>Tus Aulas</h1>
				<Link
					to={{
						pathname: '/NuevaAula',
						state: { email: email },
					}}
				>
					<div className='floating-icon'>
						<span>+</span>
					</div>
				</Link>
			</div>
			<div className='d-flex flex-wrap p-2 d-flex justify-content-center '>
				{Aulas.map((aula) => {
					return (
						<IndividualAula
							keyI={aula.id}
							name={aula.nombre_materia}
							participants={aula.participantes}
							grado={aula.grado}
						/>
					)
				})}
			</div>
		</div>
	)
}

export default TusAulas
