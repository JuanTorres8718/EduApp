import React from 'react'
import Principal from '../components/componentePrincipal/Paginaprincipal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faFacebookF,
	faLinkedinIn,
	faGithubAlt,
} from '@fortawesome/free-brands-svg-icons'
import Header from './../components/componentePrincipal/Header'
import '../style/App.css'
import '../style/Circle.css'

const App = () => {
	return (
		<section className='margin-home'>
			<Header></Header>
			<Principal></Principal>
			<footer className='pt-4 bg-dark'>
				<div className='text-center py-3'>
					<ul className='list-unstyled footer_list mb-3'>
						<li className='list-inline-item '>
							<a href='/'>
								<FontAwesomeIcon
									className='icon_footer text-light'
									icon={faFacebookF}
								></FontAwesomeIcon>
							</a>
						</li>
						<li className='list-inline-item '>
							<a href='/'>
								<FontAwesomeIcon
									className='icon_footer text-light'
									icon={faLinkedinIn}
								></FontAwesomeIcon>
							</a>
						</li>
						<li className='list-inline-item '>
							<a href='/'>
								<FontAwesomeIcon
									className='icon_footer text-light'
									icon={faGithubAlt}
								></FontAwesomeIcon>
							</a>
						</li>
					</ul>
					<p className='text-light'>
						{' '}
						© 2020 Copyright:
						<a href='/' className='text-light'> Juan Torres, Heidy Florez, Erika Otálvaro</a>
					</p>
				</div>
			</footer>
		</section>
	)
}

export default App
