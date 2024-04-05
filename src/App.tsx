import { ReactElement, useState } from 'react'
import { Header } from './components/header/Header'
import { HomePage } from './pages/home/HomePage'

type Page = {
	[key: string]: ReactElement
}

export const App = () => {
	const [currentLink, setCurrentLink] = useState('Home')

	const setPageRender = () => {
		const pages: Page = {
			"Home": <HomePage />,
			'All Pokémon': <div>All Pokémon</div>,
		}
		return pages[currentLink] || <div>404</div>
	}

	return (
		<>
			<Header linkTo={setCurrentLink} />
			{setPageRender()}
		</>
	)
}
