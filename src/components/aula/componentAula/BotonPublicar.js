import React from 'react'
import { Link } from 'react-router-dom'

const PublicForm = () => {
	return (
		<form className=' my-2 my-lg-0'>
			<Link to='/Publicar'>
				<input
					className='input-public'
					type='search'
					placeholder='Publica algún contenido...'
					aria-label='Search'
				/>
			</Link>
		</form>
	)
}

export default PublicForm
