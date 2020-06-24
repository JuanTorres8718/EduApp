import React from 'react'
import '../../style/ImageRoom.css'

const ImagenAulas = ({ imageUrl, sty }) => {
	return <img src={imageUrl} alt='avatar' className={`${sty} col-7 `} />
}

export default ImagenAulas
