import { Container, Grid, Typography } from '@mui/material'
import { Carousel } from '../../modules/carousel/Carousel'

export const HomePage = () => {
	return (
		<Container maxWidth='xl'>
			<Grid container alignItems={'center'}>
				<Grid item xs={6}>
					<Carousel />
				</Grid>
				<Grid item xs={6}>
					<Typography variant='h3' component='h3' align='center'>
						Material UI is awesome!!!
					</Typography>
				</Grid>
			</Grid>
			{/* <Typography variant="h4" component="h4" align='left'>
					Material UI is an open-source React component library
					</Typography>
					<Typography variant="h5" component="h5" align='right'>
					Удобное, а главное, быстрое решение для создания UI компонентов
					</Typography> */}
		</Container>
	)
}
