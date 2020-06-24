import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './styles/App.css';
import './styles/Circle.css';
import Ruta from './pages/Router';

ReactDOM.render(
	<React.StrictMode>
		<Ruta />
	</React.StrictMode>,
	document.getElementById('root')
)


