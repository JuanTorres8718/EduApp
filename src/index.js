import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Ruta from './components/ruta/Ruta'
import './style/Index.css'

ReactDOM.render(
	<React.StrictMode>
		<Ruta />
	</React.StrictMode>,
	document.getElementById('root')
)
