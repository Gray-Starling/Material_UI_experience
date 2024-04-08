import { Container, Divider, Grid, Typography } from '@mui/material'
import { Carousel } from '../../modules/carousel/Carousel'
import { WikiBlock } from '@/components/wikiBlock/WikiBlock'

export const HomePage = () => {
	return (
		<Container maxWidth='xl'>
			<Grid container alignItems={'center'} sx={{ mb: '20px' }}>
				<Grid item xs={6}>
					<Carousel />
				</Grid>
				<Grid item xs={6}>
					<Typography variant='h3' component='h3' align='center'>
						"Pokemon" is awesome!!!
					</Typography>
				</Grid>
			</Grid>
			<WikiBlock />
			<Divider variant="middle" sx={{mt: "20px", mb: "20px"}}/>
		</Container>
	)
}
