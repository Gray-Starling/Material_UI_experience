import { useState } from 'react'

import { SideMenuBar } from '@/modules/sideMenuBar/SideMenuBar'

import { MenuOutlined } from '@mui/icons-material'
import {
	AppBar,
	Container,
	IconButton,
	Toolbar,
	Typography,
} from '@mui/material'

type HeaderProps = {
	linkTo: (arg: string) => void
}

export const Header = ({linkTo}: HeaderProps) => {
	const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)

	return (
		<AppBar position='sticky' sx={{mb: "20px"}}>
			<Container maxWidth='xl' disableGutters>
				<Toolbar>
					<Typography variant='h6' component='span' sx={{ flexGrow: '1' }}>
						Material UI Experience
					</Typography>
					<IconButton color='inherit' onClick={() => setIsSideMenuOpen(true)}>
						<MenuOutlined />
					</IconButton>
					<SideMenuBar isOpen={isSideMenuOpen} setIsOpen={setIsSideMenuOpen} linkTo={linkTo}/>
				</Toolbar>
			</Container>
		</AppBar>
	)
}
