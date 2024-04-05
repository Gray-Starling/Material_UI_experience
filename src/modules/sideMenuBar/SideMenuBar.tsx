import { menu } from './const'

import {
	Box,
	Divider,
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from '@mui/material'

type SideMenuBarProps = {
	isOpen: boolean
	setIsOpen: (arg: boolean) => void
	linkTo: (arg: string) => void
}

export const SideMenuBar = ({
	isOpen,
	setIsOpen,
	linkTo,
}: SideMenuBarProps) => {
	return (
		<Drawer
			anchor='right'
			open={isOpen}
			onClose={() => setIsOpen(false)}
			PaperProps={{
				sx: { width: '300px' },
			}}>
			<List>
				{menu.map((item, index) => (
					<Box key={index}>
						<ListItem>
							<ListItemButton onClick={() => linkTo(item.linkTitle)}>
								<ListItemIcon>{item.linkIcon}</ListItemIcon>
								<ListItemText primary={item.linkTitle} />
							</ListItemButton>
						</ListItem>
						{item.linkTitle === 'Home' && <Divider />}
					</Box>
				))}
			</List>
		</Drawer>
	)
}
