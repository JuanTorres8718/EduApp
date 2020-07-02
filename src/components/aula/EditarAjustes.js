import React from 'react'

const EditarAjustes = ({ name, valueInput }) => {
	return (
		<div className='modal-ajuste fondo_registro'>
			<div className='modal-content'>
				<div className='modal-header'>
					<h5 className='modal-title'>{name}</h5>
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
					<p>{valueInput}</p>
				</div>
				<div className='modal-footer'>
					<button
						type='button'
						className='btn btn-secondary'
						data-dismiss='modal'
					>
						Cerrar
					</button>
					<button type='button' className='btn btn-primary'>
						Guardar
					</button>
				</div>
			</div>
		</div>
	)
}

export default EditarAjustes
