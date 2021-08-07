import { Route } from 'react-router-dom'
import NavigationBar from './NavigationBar'
import Home from './Home'

import 'bulma/css/bulma.min.css';
import '../styles/App.scss'

function App(): JSX.Element {
	return (
		<main>
			<NavigationBar/>
			<Route exact path="/" component={Home} />
			<Route exact path="music" component={Music} />
			<Route exact path="about" component={About} />
		</main>
	)
}

function Music() {
	return <h2>Music</h2>
}

function About() {
	return <h2>About</h2>
}

export default App
