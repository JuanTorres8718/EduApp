import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from '../../pages/App'
import Registro from '../componentePrincipal/Registro'
import Ingreso from '../componentePrincipal/Ingreso'
import Student from '../../pages/Student'
import ClassRoom from '../../pages/ClassRoom'
import TuAula from '../aula/TuAula'
import Ajustes from '../aula/Ajustes'
import FormAula from '../aula/FormAula'
import PublicInfo from '../aula/PublicInfo'
import Calificaciones from '../aula/Calificaciones'
import Actividades from '../aula/Actividades'
import AsignarActividad from '../aula/componenteActividad/AsignarActividad'
import VerActividad from '../aula/componenteActividad/VerActividad'

const Ruta = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path='/' component={App}></Route>
			<Route path='/Registro' component={Registro} />
			<Route path='/Ingreso' component={Ingreso} />
			<Route exact path='/perfil' component={Student} />
			<Route exact path='/ClassRoom' component={ClassRoom} />
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

export default Ruta
