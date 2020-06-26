import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faArrowLeft,
	faUser,
	faCamera,
	faFileUpload,
	faVideo,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import '../../style/PublicarInformacion.css'

const PublicarInformacion = () => {
	return (
		<div className='container-form pt-4'>
			<Link to='/AulaMatematicas'>
				<FontAwesomeIcon className='back-arrow' icon={faArrowLeft} />
			</Link>
			<div className='form-grop text-center pt-5 pb-4'>
				<Link to='/AulaMatematicas' className='publicar'>
					Publicar
				</Link>
			</div>
			<div className='card'>
				<div className='card-body'>
					<div className='card-public d-flex align-items-center'>
						<FontAwesomeIcon className='photo-public' icon={faUser} />
						<div className='content-subtitle d-flex flex-column'>
							<h6 className='title-public'>Pepito Oliveira</h6>
						</div>
					</div>
					<form action='/AulaMatematicas'>
						<div className='form-group'>
							<textarea
								className='form-control'
								id='text-publicacion'
								rows='4'
								placeholder='Publica alguna informacion o contenido'
							></textarea>
						</div>
						<div className='form-group'>
							<a href='/'>
								<FontAwesomeIcon icon={faCamera} />
								Fotos/Video
							</a>
						</div>
						<div className='form-group'>
							<a href='/'>
								<FontAwesomeIcon icon={faFileUpload} />
								Documentos
							</a>
						</div>
						<div className='form-group'>
							<a href='/'>
								<FontAwesomeIcon icon={faVideo} />
								Transmitir
							</a>
						</div>
						<button type='submit' className='btn btn-primary btn-block'>
							Publicar
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default PublicarInformacion