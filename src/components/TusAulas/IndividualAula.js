import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../style/IndividualAulas.css'
import ImagenAulas from './ImagenAulas'

const IndividualAula = ({
	styles,
	participants,
	name,
	profesor,
	url,
}) => {
	const [varStyle] = useState({
		styleCircle: 'circle',
	})
	return (
		<Link
			to={`/AulaMatematicas`}
			className={` col-3 ${styles} grid p-4 m-3 d-flex align-items-center flex-column  justify-content-center col-7 col-lg-3 col-md-3 text-dark col-xl-2 `}
			id="IndividualRoom"
		>
			<ImagenAulas imageUrl={url} style={varStyle.styleCircle}></ImagenAulas>
			<h5 className='m-1 text-center Englebert'>{name}</h5>
			<p>{profesor}</p>
			<p>{participants}</p>
		</Link>
	)
}

export default IndividualAula
