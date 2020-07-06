import React from 'react'
import '../../style/Grid.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Grid = ({ icon, name }) => {
	return (
		<React.Fragment>
			<FontAwesomeIcon icon={icon} className='icon m-1' />
			<h5 className='text-center'>{name}</h5>
		</React.Fragment>
	)
}

export default Grid
