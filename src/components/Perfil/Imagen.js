import React from 'react'
import '../../style/Image.css'

const Imagen = ({ imageUrl, sty }) => {
	return <img src={imageUrl} alt='avatar' className={`${sty} `} />
}

export default Imagen
