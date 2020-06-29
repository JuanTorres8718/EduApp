import React from 'react'
import '../../style/Logros.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'
import { faMedal } from '@fortawesome/free-solid-svg-icons'

const Achivements = () => {
	return (
		<div className='row col-12 col-lg-4 col-md-4 col-sm-5 p-1 logros d-flex justify-content-between'>
			<div className='col-5 d-flex flex-column align-items-center '>
				<FontAwesomeIcon icon={faTrophy} className='points' id='points' />
				<p className='lp'>Logros</p>
			</div>
			<div className='col-5   d-flex flex-column align-items-center'>
				<FontAwesomeIcon icon={faMedal} className='points' />
				<p className='lp'>Puntos</p>
			</div>
		</div>
	)
}

export default Achivements
