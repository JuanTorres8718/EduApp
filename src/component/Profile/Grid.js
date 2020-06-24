import React from 'react'
import {Link} from "react-router-dom";

import '../../style/IndividualRoom.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Grid = ({style,icon,name, ruta}) =>{ 
  return(   
    <Link 
    to={`/${ruta}`}
    className={`border ${style} grid p-2 m-2 d-flex align-items-center flex-column  justify-content-center text-light col-4 col-lg-1 col-md-3`} >      
      <FontAwesomeIcon icon={icon} className='icon m-1'/> 
      <h5 className='text-center'>{name}</h5>
    </Link>
   
  )
}

export default Grid