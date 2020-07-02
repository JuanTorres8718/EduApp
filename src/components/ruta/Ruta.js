import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from '../../pages/App'
import Registro from '../componentePrincipal/Registro'
import Ingreso from '../componentePrincipal/Ingreso'
import Perfil from '../../pages/Perfil'
import TusAulas from '../../pages/TusAulas'
import TuAula from '../aula/TuAula'
import Ajustes from '../aula/Ajustes'
import FormularioAula from '../aula/FormularioAula'
import PublicarInformacion from '../aula/PublicarInformacion'
import Calificaciones from '../aula/Calificaciones'
import Actividades from '../aula/Actividades'
import AsignarActividad from '../aula/componenteActividad/AsignarActividad'
import VerActividad from '../aula/componenteActividad/VerActividad'
import Ayuda from '../aula/Ayuda'
import VideoLlamada from '../aula/VideoLlamada'
import Chat from '../aula/Chat/Chat'

const Ruta = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path='/' component={App}></Route>
			<Route path='/Registro' component={Registro} />
			<Route path='/Ingreso' component={Ingreso} />
			<Route exact path='/perfil' component={Perfil} />
			<Route exact path='/TusAulas' component={TusAulas} />
			<Route exact path='/AulaMatematicas' component={TuAula} />
			<Route exact path='/NuevaAula' component={FormularioAula} />
			<Route exact path='/TuAula/Ajustes' component={Ajustes} />
			<Route exact path='/Publicar' component={PublicarInformacion} />
			<Route exact path='/Ayuda' component={Ayuda} />
			<Route exact path='/VideoLlamada' component={VideoLlamada} />
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
			<Route exact path='/TuAula/Chat' component={Chat} />
		</Switch>
	</BrowserRouter>
)

export default Ruta
