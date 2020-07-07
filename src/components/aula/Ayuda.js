import React from 'react'
import NavAula from './componentAula/NavAula'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import '../../style/Ayuda.css'

const Ayuda = (props) => {
	const id = props.location.state.id
	return (
		<div className='container-fluid' id='cont-ayuda'>
			<div className='fixed-top'>
				<NavAula id={id} />
			</div>
			<div className='cont-help'>
				<div className='text-center'>
					<Link
						to={{
							pathname: '/AulaMatematicas',
							state: { keyI: id },
						}}
					>
						<FontAwesomeIcon className='arrow-asignar' icon={faArrowLeft} />
					</Link>
					<h3 className='title-ayuda'>Explorador de Ayuda</h3>
				</div>
				<div className='text-cont'>
					<h5 className='subtitle-ayuda'>¿Cómo realizar publicaciones?</h5>
					<br />
					<p>
						Type something here Lorem ipsu saad Kiryun ha kbu hyudo afewu remju
						here Lorem ipsu saad Kiryun ha kbu hyudo afewu remju, here Lorem
						ipsu saad Kiryun ha kbu hyudo afewu remju
					</p>
					<br />
					<h5>¿Cómo editar las publicaciones?</h5>
					<br />
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Type something here Lorem ipsu saad
						Kiryun ha kbu hyudo afewu remju
					</p>
					<br />
					<h5>¿Dónde revisar las notificaciones?</h5>
					<br />
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Type something here Lorem ipsu saad
						Kiryun ha kbu hyudo afewu remju
					</p>
					<br />
					<h5>¿Cómo eliminar una publicación?</h5>
					<br />
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Type something here Lorem ipsu saad
						Kiryun ha kbu hyudo afewu remju
					</p>
					<br />
				</div>
			</div>
		</div>
	)
}

export default Ayuda
