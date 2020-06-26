import React from 'react'
import NavAula from '../aula/componentAula/NavAula'
import PublicForm from '../aula/componentAula/PublicForm'
import CardPublic from './componentAula/CardPublic'
import '../../style/TuAula.css'

const TuAula = () => {
	return (
		<React.Fragment>
			<div className='page-aula'>
				<div className='fixed-top'>
					<NavAula />
				</div>
				<div className='main'>
					<PublicForm />
					<CardPublic />
				</div>
			</div>
		</React.Fragment>
	)
}

export default TuAula
