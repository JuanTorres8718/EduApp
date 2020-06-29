import React from 'react'
import NavAula from '../aula/componentAula/NavAula'
import BotonPublicar from './componentAula/BotonPublicar'
import CardPublicacion from './componentAula/CardPublicacion'
import '../../style/TuAula.css'

const TuAula = () => {
	return (
		<React.Fragment>
			<div className='page-aula' id='cont-page-aula'>
				<div className='fixed-top'>
					<NavAula />
				</div>
				<div className='main'>
					<BotonPublicar />
					<CardPublicacion />
				</div>
			</div>
		</React.Fragment>
	)
}

export default TuAula
