import React, { useState } from 'react'
import IndividualAula from './IndividualAula'
import '../../style/GridRoom.css'

const GridAulas = () => {
	const [varStyles] = useState({
		stylePink: 'Pinkborder',
		styleBlue: 'Blueborder',
		styleGreen: 'Greenborder',
	})
	return (
		<div>
			<h1 className='text-center'>Tus Aulas</h1>
			<div className='d-flex flex-wrap p-2 d-flex justify-content-center '>
				<IndividualAula
					styles={varStyles.stylePink}
					url='https://www.entramar.mvl.edu.ar/wp-content/uploads/2019/03/smart32.jpg'
					name='MATEMATICAS'
					profesor='Erika Otalvaro'
					participants='30 participantes '
				/>
				<IndividualAula
					styles={varStyles.styleBlue}
					url='https://www.salminter.com/blog/wp-content/uploads/2017/01/347.jpg'
					name='ESPAÑOL'
					profesor='David Torres'
					participants='10 Participantes'
				/>
				<IndividualAula styles={varStyles.styleGreen} />
				<IndividualAula styles={varStyles.stylePink} />
				<IndividualAula styles={varStyles.styleBlue} />
				<IndividualAula styles={varStyles.styleGreen} />
				<IndividualAula styles={varStyles.stylePink} />
				<IndividualAula styles={varStyles.styleBlue} />
				<IndividualAula styles={varStyles.styleGreen} />
			</div>
		</div>
	)
}

export default GridAulas
