import React from 'react';

import '../../style/Image.css'

const Image = ({imageUrl, sty}) => {  
  return <img src = {imageUrl} alt = 'avatar' className={`${sty} col-4`} />
}

export default Image;