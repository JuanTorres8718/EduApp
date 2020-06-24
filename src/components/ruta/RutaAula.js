import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import TuAula from '../aula/TuAula'
import Ajustes from '../aula/Ajustes'
import FormAula from '../aula/FormAula'
import PublicInfo from '../aula/PublicInfo'
import Calificaciones from '../aula/Calificaciones'
import Actividades from '../aula/Actividades'
import AsignarActividad from '../aula/componenteActividad/AsignarActividad'
import VerActividad from '../aula/componenteActividad/VerActividad'

const RutaAula = () => (
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

export default RutaAula
