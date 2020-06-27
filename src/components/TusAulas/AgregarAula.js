import React from 'react';
import PropTypes from 'prop-types';
import '../../style/AgregarAula.css'

const AgregarAula = ({icon}) => {
  return (
    <div className='floating-icon'>
      <span>{icon}</span>
    </div>
  )
};

AgregarAula.propTypes = {
  icon: PropTypes.string,
}

export default AgregarAula;