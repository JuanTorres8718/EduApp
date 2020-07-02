import React from 'react'
import { Link } from 'react-router-dom'
import '../../style/IndividualAulas.css'
// import ImagenAulas from './ImagenAulas'

const IndividualAula = ({ participants, name, url, grado, identificador }) => {
	return (
		<Link
			to={{
				pathname: `/AulaMatematicas`,
				state: { keyI: identificador },
			}}
			className={` col-3  gridAula p-4 m-3 d-flex align-items-center flex-column justify-content-center col-7 col-lg-3 col-md-3 text-dark col-xl-2 `}
			id='IndividualRoom'
		>
			{/* <ImagenAulas imageUrl={url} style={varStyle.styleCircle}></ImagenAulas> */}
			<h5 className='m-1 text-center Englebert'>{name}</h5>
			<p>Participantes {participants}</p>
			<p>{grado}</p>
		</Link>
	)
}

export default IndividualAula
