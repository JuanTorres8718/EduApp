import React, { useState } from 'react'
import NavAula from '../aula/componentAula/NavAula'
import BotonPublicar from './componentAula/BotonPublicar'
import CardPublicacion from './componentAula/CardPublicacion'
import '../../style/TuAula.css'

const TuAula = (props) => {
	const [id] = useState(props.location.state.keyI)

	return (
		<React.Fragment>
			<div className='page-aula' id='cont-page-aula'>
				<div className='fixed-top'>
					<NavAula id={id} />
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
