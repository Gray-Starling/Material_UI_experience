import { MenuOutlined } from '@mui/icons-material'
import {
	AppBar,
	Container,
	Drawer,
	IconButton,
	Toolbar,
	Typography,
} from '@mui/material'
import { useState } from 'react'

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
            // PaperProps={{
            //   sx: { width: "10rem" },
            // }}
					>123</Drawer>
				</Toolbar>
			</Container>
		</AppBar>
	)
}
