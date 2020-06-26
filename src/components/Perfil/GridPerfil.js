import React, { useState } from 'react'
import Grid from './Grid'
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { faGamepad } from '@fortawesome/free-solid-svg-icons'
import { faUserEdit } from '@fortawesome/free-solid-svg-icons'
import { faFileContract } from '@fortawesome/free-solid-svg-icons'
import { faHourglassHalf } from '@fortawesome/free-solid-svg-icons'
import '../../style/GridProfile.css'

const GridGroup = () => {
	const [varStyle] = useState({
		styleBlue: 'Blue',
		styleGreen: 'Green',
		stylePink: 'Pink',
		styleNav: 'circle',
	})
	return (
		<div className='d-flex flex-wrap p-2 d-flex justify-content-center '>
			<Grid
				style={varStyle.styleGreen}
				icon={faChalkboardTeacher}
				name='Tus Aulas'
				ruta='TusAulas'
			/>
			<Grid
				style={varStyle.styleGreen}
				icon={faCalendarAlt}
				name='Calendario'
			/>
			<Grid style={varStyle.styleGreen} icon={faGamepad} name='Juegos' />
			<Grid style={varStyle.styleGreen} icon={faUserEdit} name='Editar Perfil' />
			<Grid style={varStyle.styleGreen} icon={faFileContract} name='Examenes' />
			<Grid
				style={varStyle.styleGreen}
				icon={faHourglassHalf}
				name='Proximas Clases'
			/>
		</div>
	)
}

export default GridGroup
