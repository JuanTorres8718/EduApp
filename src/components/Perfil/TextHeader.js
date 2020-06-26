import React from 'react'
import '../../style/TextHeader.css'

const TextHeader = ({ welcome, name, profesion, institution }) => {
	return (
		<section className='col-8'>
			<h3 className="Englebert">{welcome}</h3>
			<p>{name}</p>
			<p>{profesion}</p>
		</section>
	)
}

export default TextHeader
