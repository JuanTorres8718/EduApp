import React, {useState} from "react";
import PropTypes from "prop-types";

import Image from "./Image";
import Achievements from "./Achievements";
import TextHeader from "./TextHeader";


import "../../style/Header.css";

import Avatar from '../../images/avatarPrueba.jpg'

const Header = ({institution}) => {
  const [varStyle,setVarStyle] = useState({
    styleAvatar : 'image', 
  })
  return (
    <div className="row d-flex mt-3 ml-2 mr-2">
      <TextHeader
      welcome="Hola"
      name="Juan Torres"
      profesion="Estudiante de 10 grado"
      ></TextHeader>     
      <Image
      imageUrl={Avatar}
      sty ={varStyle.styleAvatar}/>
      <section className="col-12 d-flex justify-content-between mt-2">
        <p className='col-8 pl-0'>{institution}</p>
        <Achievements/>
      </section>
    </div>
  );
};

Header.propTypes = {
  welcome: PropTypes.string,
  name: PropTypes.string,
  profesion: PropTypes.string,
};

export default Header;
