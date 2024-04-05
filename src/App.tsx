import { ReactElement, useState } from 'react'
import { Header } from './cmponents/header/Header'
import { HomePage } from './pages/home/HomePage'

type Page = {
	[key: string]: ReactElement
}

export const App = () => {
	const [currentLink, setCurrentLink] = useState('main')

	const setPageRender = () => {
		const pages: Page = {
			Home: <HomePage />,
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
