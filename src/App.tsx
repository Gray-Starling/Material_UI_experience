import { ReactElement, useState } from 'react'
import { Header } from './cmponents/header/Header'

type Page = {
	[key: string]: ReactElement
}

export const App = () => {
	const [currentLink, setCurrentLink] = useState('main')

	const setPageRender = () => {
		const pages: Page = {
			"Home": <div>Home11</div>,
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
