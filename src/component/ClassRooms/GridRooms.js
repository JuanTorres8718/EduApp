import React, { useState } from 'react'

import IndividualRoom from './IndividualRoom'

import '../../style/GridRoom.css'

const GridClassRoom = () =>{
  const [varStyles,useVarStyles] = useState({
    stylePink: 'Pinkborder',
    styleBlue: 'Blueborder',
    styleGreen: 'Greenborder'
  })
  return(
    <div>
    <h1 className='text-center' >Tus Aulas</h1>
    <div className='d-flex flex-wrap p-2 d-flex justify-content-center'>      
    <IndividualRoom
    styles={varStyles.stylePink}
    url="https://www.entramar.mvl.edu.ar/wp-content/uploads/2019/03/smart32.jpg"
    name='MATEMATICAS'
    profesor='Erika Otalvaro'
    participants='30 participantes '/>
    <IndividualRoom
    styles={varStyles.styleBlue}
    />
    <IndividualRoom
    styles={varStyles.styleGreen}/>
    <IndividualRoom
    styles={varStyles.stylePink}/>
    <IndividualRoom
    styles={varStyles.styleBlue}/>
    <IndividualRoom
    styles={varStyles.styleGreen}/>
    <IndividualRoom
    styles={varStyles.stylePink}/>
    <IndividualRoom
    styles={varStyles.styleBlue}/>
    <IndividualRoom
    styles={varStyles.styleGreen}/>
    </div>
    </div>
  )
}

export default GridClassRoom;