import { Container, Grid, Typography } from '@mui/material'
import { Carousel } from '../../modules/carousel/Carousel'
import { TextReview } from '@/components/textReview/TextReview'

export const HomePage = () => {
	return (
		<Container maxWidth='xl'>
			<Grid container alignItems={'center'} sx={{ mb: '20px' }}>
				<Grid item xs={6}>
					<Carousel />
				</Grid>
				<Grid item xs={6}>
					<Typography variant='h3' component='h3' align='center'>
						Material UI is awesome!!!
					</Typography>
				</Grid>
			</Grid>
			<TextReview />
		</Container>
	)
}
