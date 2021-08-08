import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'

ReactDOM.render(
	<BrowserRouter basename='/personal-website'>
		<App />
	</BrowserRouter>,
	document.getElementById('root')
)
