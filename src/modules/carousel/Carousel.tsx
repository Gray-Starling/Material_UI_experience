import { Box } from '@mui/material'
import Slide1 from '@/assets/images/carousel/slide_1.jpg'
import Slide2 from '@/assets/images/carousel/slide_2.jpg'
import { useEffect, useMemo, useState } from 'react'
import { APP__SETTINGS } from '@/AppSetings'

export const Carousel = () => {
  const {homePageCarouselDelay} = APP__SETTINGS
	const images = useMemo(() => [Slide1, Slide2], [])
	const [carouselImage, setCarouselImage] = useState(Slide1)
	const [currentIndex, setCurrentIndex] = useState(0)

	const pickNextSlide = (currentIndex: number, arr: string[]): number => {
		return (currentIndex + 1) % arr.length
	}

	useEffect(() => {
		const interval = setInterval(() => {
			const nextSlideIndex = pickNextSlide(currentIndex, images)
			setCurrentIndex(nextSlideIndex)
			setCarouselImage(images[nextSlideIndex])
		}, homePageCarouselDelay)

		return () => clearInterval(interval)
	}, [currentIndex, images, homePageCarouselDelay])
	return (
		<Box sx={{ maxWidth: '100%', maxHeight: '100%' }}>
			<Box
				sx={{
					height: 'auto',
					width: 'auto',
					maxWidth: '100%',
					maxHeight: '100%',
				}}
				component='img'
				src={carouselImage}
				alt='The house from the offer.'
			/>
		</Box>
	)
}
