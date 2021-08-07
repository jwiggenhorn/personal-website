import { Form, Navbar } from 'react-bulma-components'

function NavigationBar(): JSX.Element {
	return (
		<Form.Field horizontal={true} className='navbar'>
			<Navbar.Item href='/'>Home</Navbar.Item>
			<Navbar.Item href='/music'>Music</Navbar.Item>
			<Navbar.Item href='/about'>About</Navbar.Item>
		</Form.Field>
	)
}

export default NavigationBar
