import React, {useState} from 'react'
import NavAula from '../aula/componentAula/NavAula'
import BotonPublicar from './componentAula/BotonPublicar'
import CardPublicacion from './componentAula/CardPublicacion'
import '../../style/TuAula.css'

const TuAula = (props) => {
	let id = props.location.state.keyI
	const [datos] = useState({
		id : id
	})
	
	
	return (
		<React.Fragment>
			<div className='page-aula' id='cont-page-aula'>
				<div className='fixed-top'>
					<NavAula
					id= {datos.id} />
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
