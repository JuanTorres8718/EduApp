import React, { useState } from 'react'
import IndividualAula from './IndividualAula'
import '../../style/GridAulas.css'

const GridAulas = () => {
	const [varStyles] = useState({
		styleGreen: 'Greenborder',
	})
	return (
		<div>
			<h1 className='text-center Englebert'>Tus Aulas</h1>
			<div className='d-flex flex-wrap p-2 d-flex justify-content-center '>
				<IndividualAula
					styles={varStyles.styleGreen}
					url='https://www.entramar.mvl.edu.ar/wp-content/uploads/2019/03/smart32.jpg'
					name='MATEMATICAS'
					profesor='Erika Otalvaro'
					participants='30 participantes '
				/>
				<IndividualAula
					styles={varStyles.styleGreen}
					url='https://www.salminter.com/blog/wp-content/uploads/2017/01/347.jpg'
					name='ESPAÑOL'
					profesor='David Torres'
					participants='10 Participantes'
				/>
				<IndividualAula styles={varStyles.styleGreen} />
				<IndividualAula styles={varStyles.styleGreen} />
				<IndividualAula styles={varStyles.styleGreen} />
				<IndividualAula styles={varStyles.styleGreen} />
				<IndividualAula styles={varStyles.styleGreen} />
				<IndividualAula styles={varStyles.styleGreen} />
				<IndividualAula styles={varStyles.styleGreen} />
			</div>
		</div>
	)
}

export default GridAulas
