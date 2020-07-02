import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faChalkboard,
	faFilm,
	faUserCircle,
	faVideo,
	faMicrophone,
} from '@fortawesome/free-solid-svg-icons'
import NavAula from '../aula/componentAula/NavAula'
import maestro from '../../images/maestro.jpg'
import '../../style/VideoLlamada.css'

const VideoLlamada = (props) => {
	const id = props.location.state.id
	return (
		<div className='container-fluid' id='cont-videollamada'>
			<div className='fixed-top'>
				<NavAula id={id} />
			</div>
			<div className='contenedor-video'>
				<div className='row'>
					<div className='col-12 col-lg-8'>
						<div className='cont-img-call'>
							<img src={maestro} className='img-fluid' alt='imagen'></img>
							<div className='icons-call'>
								<FontAwesomeIcon className='icon-size' icon={faMicrophone} />
								<FontAwesomeIcon
									className='icon-size icon-film'
									icon={faVideo}
								/>
							</div>
						</div>
						<div className='jamboard'>
							<FontAwesomeIcon
								className='icon-size icon-margin'
								icon={faChalkboard}
							/>
							Activar Jamboard
						</div>
						<div className='broadcast'>
							<FontAwesomeIcon
								className='icon-size icon-margin'
								icon={faFilm}
							/>
							Transmitir
						</div>
					</div>
					<div className='col-12 col-lg-4 mt-4'>
						<h5 className='text-center'>Estudiantes</h5>
						<ul className='list-group list-group-flush'>
							<li className='list-group-item'>
								<FontAwesomeIcon className='icon-size' icon={faUserCircle} />
								Carlos Fedo
							</li>
							<li className='list-group-item'>
								<FontAwesomeIcon className='icon-size' icon={faUserCircle} />
								Carry Saul
							</li>
							<li className='list-group-item'>
								<FontAwesomeIcon className='icon-size' icon={faUserCircle} />
								Susan Eleiton
							</li>
							<li className='list-group-item'>
								<FontAwesomeIcon className='icon-size' icon={faUserCircle} />
								Son Tron
							</li>
							<li className='list-group-item'>
								<FontAwesomeIcon className='icon-size' icon={faUserCircle} />
								Pedro Neul
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default VideoLlamada
