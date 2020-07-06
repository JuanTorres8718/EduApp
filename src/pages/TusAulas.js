import React, { useState, useEffect } from 'react'
import IndividualAula from '../components/TusAulas/IndividualAula'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../style/TusAulas.css'
import '../style/AgregarAula.css'

const TusAulas = (props) => {
	const [Aulas, setAulas] = useState([])
	const [perfil, setPerfil] = useState({
		email: '',
		nombre: '',
		institucion: '',
		profesion: '',
		avatar: '',
	})

	var email = props.location.state.email

	useEffect(() => {
		let isMounted = true
		let arrayp = []
		axios.get('https://api-fake-eduapp.herokuapp.com/usuario').then((res) => {
			for (let i = 0; i < res.data.length; i++) {
				if (email === res.data[i].email) {
					var id = res.data[i].id
					arrayp.push(res.data[i])
				}
			}
			if (id !== undefined) {
				axios.get('https://api-fake-eduapp.herokuapp.com/aulas').then((res) => {
					const info = res.data
					let array = []
					for (let j = 0; j < info.length; j++) {
						if (id === info[j].usuario) {
							array.push(info[j])
						}
					}
					if (isMounted) {
						setAulas(array)
						setPerfil(arrayp)
					}
				})
			} else {
				props.history.push('/Ingreso')
			}
		})
		return () => {
			isMounted = false
		}
	})

	return (
		<div className='tusaulas'>
			<div className='d-flex justify-content-around ml-5 p-3 '>
				<Link
					to={{
						pathname: '/perfil',
						state: perfil,
					}}
				>
					<FontAwesomeIcon className='arrow-tus-aulas m-3' icon={faArrowLeft} />
				</Link>
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
							key={aula.id}
							name={aula.nombre_materia}
							participants={aula.participantes}
							grado={aula.grado}
							identificador={aula.id}
						/>
					)
				})}
			</div>
		</div>
	)
}

export default TusAulas
