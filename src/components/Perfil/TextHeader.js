import React from 'react'
import '../../style/TextHeader.css'

const TextHeader = ({ welcome, name, profesion, institution }) => {
	return (
		<section className='col-12 col-md-8'>
			<h3 className='Englebert title'>{welcome}</h3>
			<p className='text_general'>{name}</p>
			<p className='text_general'>{profesion}</p>
		</section>
	)
}

export default TextHeader
