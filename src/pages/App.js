import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import TuAula from '../components/aula/TuAula'
import Ajustes from '../components/aula/Ajustes'
import FormAula from '../components/aula/FormAula'
import PublicInfo from '../components/aula/PublicInfo'
import Calificaciones from '../components/aula/Calificaciones'
import Actividades from '../components/aula/Actividades'
import AsignarActividad from '../components/aula/componenteActividad/AsignarActividad'
import VerActividad from '../components/aula/componenteActividad/VerActividad'

const App = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path='/AulaMatematicas' component={TuAula} />
			<Route exact path='/' component={FormAula} />
			<Route exact path='/TuAula/Ajustes' component={Ajustes} />
			<Route exact path='/Publicar' component={PublicInfo} />
			<Route
				exact
				path='/Actividades/AsignarActividad'
				component={AsignarActividad}
			/>
			<Route
				exact
				path='/Actividades/VerActividad/Calificaciones'
				component={Calificaciones}
			/>
			<Route exact path='/Actividades' component={Actividades} />
			<Route exact path='/Actividades/VerActividad' component={VerActividad} />
		</Switch>
	</BrowserRouter>
)

export default App
