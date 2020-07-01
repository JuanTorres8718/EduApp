import React from 'react'
import NavAula from './componentAula/NavAula'
import '../../style/Ayuda.css'

const Ayuda = () => {
	return (
		<div className='container-fluid' id='cont-ayuda'>
			<div className='fixed-top'>
				<NavAula />
			</div>
			<div className='cont-help'>
				<div className='text-center'>
					<h3 className='title-ayuda'>Explorador de Ayuda</h3>
				</div>
				<div className='text-cont'>
					<h5 className='subtitle-ayuda'>¿Como realizar publicaciones?</h5>
					<br />
					<p>
						Type something here Lorem ipsu saad Kiryun ha kbu hyudo afewu remju
						here Lorem ipsu saad Kiryun ha kbu hyudo afewu remju, here Lorem
						ipsu saad Kiryun ha kbu hyudo afewu remju
					</p>
					<br />
					<h5>¿Como editar las publicaciones?</h5>
					<br />
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Type something here Lorem ipsu saad
						Kiryun ha kbu hyudo afewu remju
					</p>
					<br />
					<h5>¿Donde revisar las notificaciones?</h5>
					<br />
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Type something here Lorem ipsu saad
						Kiryun ha kbu hyudo afewu remju
					</p>
					<br />
					<h5>¿Como eliminar una publicacion?</h5>
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
