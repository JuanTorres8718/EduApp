import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faUser,
	faHeart,
	faHeartBroken,
	faSmileBeam,
	faSmileWink,
} from '@fortawesome/free-solid-svg-icons'
import photoMath from '../../../images/matematicas.PNG'

const CardPublicacion = () => {
	return (
		<div className='card'>
			<div className='card-body'>
				<div className='title-card d-flex align-items-center justify-content-center'>
					<FontAwesomeIcon className='icon-card' icon={faUser} />
					<div className='content-subtitle d-flex flex-column'>
						<h6 className='width-title'>Actividad 1</h6>
						<p>Operaciones aritméticas</p>
					</div>
				</div>
				<img
					src={photoMath}
					className='img-fluid img-publicacion'
					alt='matematicas'
				/>
				<p className='card-text text-justify'>
					Compañeros les comparto una foto de cómo podría ser el trabajo. Pueden
					mirarlo y estudiar, que mañana les preguntaré acerca de esto.
				</p>
			</div>
			<div className='card-footer d-flex justify-content-between'>
				<small className='text-muted'>Comentarios...</small>
				<div>
					<FontAwesomeIcon icon={faHeart} />
					<FontAwesomeIcon icon={faHeartBroken} />
					<FontAwesomeIcon icon={faSmileBeam} />
					<FontAwesomeIcon icon={faSmileWink} />
				</div>
			</div>
		</div>
	)
}

export default CardPublicacion
