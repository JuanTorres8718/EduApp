import React from 'react'
import '../../style/Main.css'
import Grid from './Grid'
import { Link } from 'react-router-dom'
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons'
import {
	faCalendarAlt,
	faGamepad,
	faUserEdit,
	faFileContract,
	faHourglassHalf,
} from '@fortawesome/free-solid-svg-icons'

const Main = ({ email }) => {
	return (
		<div className='main m-0'>
			<div className='d-flex flex-wrap p-2 d-flex justify-content-center '>
				<Link
					to={{
						pathname: '/TusAulas',
						state: { email: email },
					}}
					className={`border grid p-3 ml-4 mr-4 mb-4 d-flex align-items-center flex-column justify-content-center text-light col-4 col-lg-2 col-md-2 col-xl-1 `}
					id='grid'
				>
					<Grid icon={faChalkboardTeacher} name='Tus Aulas' />
				</Link>
				<div
					className={`border grid p-3 ml-4 mr-4 mb-4 d-flex align-items-center flex-column justify-content-center text-light col-4 col-lg-2 col-md-2 col-xl-1 `}
					id='grid'
				>
					<Grid icon={faCalendarAlt} name='Calendario' />
				</div>
				<div
					className={`border grid p-3 ml-4 mr-4 mb-4 d-flex align-items-center flex-column justify-content-center text-light col-4 col-lg-2 col-md-2 col-xl-1 `}
					id='grid'
				>
					<Grid icon={faGamepad} name='Juegos' />
				</div>
				<div
					className={`border grid p-3 ml-4 mr-4 mb-4 d-flex align-items-center flex-column justify-content-center text-light col-4 col-lg-2 col-md-2 col-xl-1 `}
					id='grid'
				>
					<Grid icon={faUserEdit} name='Editar Perfil' />
				</div>
				<div
					className={`border grid p-3 ml-4 mr-4 mb-4 d-flex align-items-center flex-column justify-content-center text-light col-4 col-lg-2 col-md-2 col-xl-1 `}
					id='grid'
				>
					<Grid icon={faFileContract} name='Examenes' />
				</div>
				<div
					className={`border grid p-3 ml-4 mr-4 mb-4 d-flex align-items-center flex-column justify-content-center text-light col-4 col-lg-2 col-md-2 col-xl-1 `}
					id='grid'
				>
					<Grid icon={faHourglassHalf} name='Proximas Clases' />
				</div>
			</div>
		</div>
	)
}

export default Main
