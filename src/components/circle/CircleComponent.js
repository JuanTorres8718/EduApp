import React from 'react'
import '../../style/Circle.css'

const CircleComponent = ({ rojo, verde, azul }) => {
	return (
		<div className='content-circle'>
			<div className={`circuloRojo ${rojo}`}></div>
			<div className={`circuloVerde ${verde}`}></div>
			<div className={`circuloAzul ${azul}`}></div>
		</div>
	)
}

export default CircleComponent
