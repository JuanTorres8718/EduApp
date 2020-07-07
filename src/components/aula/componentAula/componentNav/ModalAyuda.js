import React from 'react'

const ModalQuestion = () => {
	return (
		<div
			className='modal fade'
			id='modalQuestion'
			data-backdrop='static'
			data-keyboard='false'
			tabIndex='-1'
			role='dialog'
			aria-labelledby='staticBackdropLabel'
			aria-hidden='true'
		>
			<div className='modal-dialog'>
				<div className='modal-content' id='width-modal'>
					<div className='modal-header'>
						<h5 className='modal-title' id='staticBackdropLabel'>
							Explorador de Ayuda
						</h5>
						<button
							type='button'
							className='close'
							data-dismiss='modal'
							aria-label='Close'
						>
							<span aria-hidden='true'>&times;</span>
						</button>
					</div>
					<div className='modal-body'>
						¿Cómo realizar publicaciones?
						<br />
						Type something here Lorem ipsu saad Kiryun ha kbu hyudo afewu remju
						<br />
						¿Cómo editar las publicaciones?
						<br />
						Type something here Lorem ipsu saad Kiryun ha kbu hyudo afewu remju
						<br />
						¿Donde revisar las notificaciones?
						<br />
						Type something here Lorem ipsu saad Kiryun ha kbu hyudo afewu remju
						<br />
						¿Cómo eliminar una publicación?
						<br />
						Type something here Lorem ipsu saad Kiryun ha kbu hyudo afewu remju
						<br />
					</div>
					<div className='modal-footer'>
						<button
							type='button'
							className='btn btn-secondary'
							data-dismiss='modal'
						>
							Cerrar
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ModalQuestion
