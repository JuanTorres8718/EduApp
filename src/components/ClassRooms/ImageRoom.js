import React from 'react'
import '../../style/ImageRoom.css'

const ImageRoom = ({ imageUrl, sty }) => {
	return <img src={imageUrl} alt='avatar' className={`${sty} col-10`} />
}

export default ImageRoom
