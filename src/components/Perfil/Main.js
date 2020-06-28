import React, { useState } from 'react'
import '../../style/Main.css'
import Grid from './Grid'
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons'
import { faCalendarAlt, faGamepad, faUserEdit, faFileContract, faHourglassHalf   } from '@fortawesome/free-solid-svg-icons'

const Main = ({email}) => {
	return (
		<div className='main m-0'>
				<div className='d-flex flex-wrap p-2 d-flex justify-content-center '>
			<Grid
				icon={faChalkboardTeacher}
				name='Tus Aulas'
				ruta='/TusAulas'
				email={email}			
			/>
			<Grid
				icon={faCalendarAlt}
				name='Calendario'
			/>
			<Grid 
			 icon={faGamepad}
			 name='Juegos' />
			<Grid
				icon={faUserEdit}
				name='Editar Perfil'
			/>
			<Grid 
			icon={faFileContract} 
			name='Examenes' />
			<Grid
				icon={faHourglassHalf}
				name='Proximas Clases'
			/>
		</div>
		</div>
	)
}

export default Main
