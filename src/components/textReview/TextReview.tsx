import { Divider, Typography } from '@mui/material'

export const TextReview = () => {
	return (
		<>
			<Typography variant='h4' component='h4'>
				Текст:
			</Typography>
			<Typography variant='h1' component='h1'>
				h1 заголовок
			</Typography>
			<Typography variant='h2' component='h2'>
				h2 заголовок
			</Typography>
			<Typography variant='h3' component='h3'>
				h3 заголовок
			</Typography>
			<Typography variant='h4' component='h4'>
				h4 заголовок
			</Typography>
			<Typography variant='h5' component='h5'>
				h5 заголовок
			</Typography>
			<Typography variant='h6' component='h6'>
				h6 заголовок
			</Typography>
			<Divider sx={{ mt: '20px', mb: '20px' }} />
			<Typography variant='body1' component='p'>
				Так же можно создавать текст с одинаковым визуалом, но отличающимися
				тегами
			</Typography>
			<Typography variant='h3' component='span'>
				h3 заголовок, но тег span
			</Typography>
			<Typography variant='body1' component='p'>
				p и текст вариант 1
			</Typography>
			<Typography variant='body2' component='p'>
				p и текст вариант 2
			</Typography>
			<Typography variant='button' component='p'>
				p и текст вариант button
			</Typography>
		</>
	)
}
