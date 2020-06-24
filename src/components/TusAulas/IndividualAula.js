import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../style/IndividualRoom.css'
import ImagenAulas from './ImagenAulas'

const IndividualAula = ({
	styles,
	participants,
	name,
	ruta,
	profesor,
	url,
}) => {
	const [varStyle] = useState({
		styleCircle: 'circle',
	})
	return (
		<Link
			to={`/${ruta}`}
			className={` col-3 ${styles}  IndividualRoom grid p-3 m-2 d-flex align-items-center flex-column  justify-content-center col-4 col-lg-3 col-md-3 text-dark`}
		>
			<ImagenAulas imageUrl={url} sty={varStyle.styleCircle}></ImagenAulas>
			<h5 className='m-1 text-center'>{name}</h5>
			<p>{profesor}</p>
			<p>{participants}</p>
		</Link>
	)
}

export default IndividualAula
