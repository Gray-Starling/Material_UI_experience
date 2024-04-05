import { MenuOutlined } from '@mui/icons-material'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import CatchingPokemonRoundedIcon from '@mui/icons-material/CatchingPokemonRounded'
import {
	AppBar,
	Box,
	Container,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Toolbar,
	Typography,
} from '@mui/material'
import { useState } from 'react'

const menu = [
	{
		linkTitle: 'All Pokémon',
		linkIcon: <CatchingPokemonRoundedIcon />,
	},
]

export const Header = () => {
	const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)

	return (
		<AppBar position='sticky' sx={{ mb: '10px' }}>
			<Container maxWidth='xl'>
				<Toolbar>
					<Typography variant='h6' component='span' sx={{ flexGrow: '1' }}>
						Material UI Experience
					</Typography>
					<IconButton color='inherit' onClick={() => setIsSideMenuOpen(true)}>
						<MenuOutlined />
					</IconButton>
					<Drawer
						anchor='right'
						open={isSideMenuOpen}
						onClose={() => setIsSideMenuOpen(false)}
						PaperProps={{
							sx: { width: '300px' },
						}}>
						<List>
							{menu.map((item, index) => (
								<ListItem key={index} disablePadding>
									<ListItemButton>
										<ListItemIcon>{item.linkIcon}</ListItemIcon>
										<ListItemText primary={item.linkTitle} />
									</ListItemButton>
								</ListItem>
							))}
						</List>
					</Drawer>
				</Toolbar>
			</Container>
		</AppBar>
	)
}
