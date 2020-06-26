import React from 'react'
import '../../style/Image.css'

const Imagen = ({ imageUrl, sty }) => {
	return <img src={imageUrl} alt='avatar' className={`${sty} col-12 col-md-12 col-lg-10 p-1` } />
}

export default Imagen
