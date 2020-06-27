import React from 'react'
import { Link } from 'react-router-dom'
import '../../style/Grid.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Grid = ({ style, icon, name, ruta }) => {
	return (
		<Link
			to={`/${ruta}`}
			className={`border ${style} grid p-3 ml-4 mr-4 mb-4 d-flex align-items-center flex-column justify-content-center text-light col-4 col-lg-2 col-md-2 col-xl-1 `}
			id= "grid"		>
			<FontAwesomeIcon icon={icon} className='icon m-1' />
			<h5 className='text-center'>{name}</h5>
		</Link>
	)
}

export default Grid
