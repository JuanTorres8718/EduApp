import React from 'react'
import '../../style/ImageRoom.css'

const ImagenAulas = ({ imageUrl, style }) => {
	return <img src={imageUrl} alt='avatar' className={`${style} col-7 `} />
}

export default ImagenAulas
