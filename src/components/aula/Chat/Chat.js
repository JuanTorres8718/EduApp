import React from 'react'
import Nav from '../componentAula/NavAula'
import Mensajes from './Mensajes'
import MensajeOtro from './MensajeOtro'
import '../../../style/Chat.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const Chat = (props) => {
	const id = props.location.state.id
	return (
		<div className=''>
			<Nav className='col-lg-4' id={id}></Nav>
			<div id='chat'>
				<Mensajes mensaje='¿me ayudan con el ejercicio 5 porfavor?'></Mensajes>
				<Mensajes mensaje='¿hoy hay clase?' />
				<MensajeOtro mensaje='si, hay clase a las 5' />
				<div
					className='fixed-bottom p-3 border-top d-flex justify-content-between bg-dark '
					id='boton'
				>
					<input
						type='text'
						placeholder='Escribe aquí tu mensaje'
						className='rounded col-11'
					></input>
					<button type='submit' className='boton'>
						<FontAwesomeIcon icon={faPaperPlane} />
					</button>
				</div>
			</div>
		</div>
	)
}

export default Chat
