import { Box } from '@mui/material'
import Slide1 from '@/assets/images/carousel/slide_1.jpg'
import Slide2 from '@/assets/images/carousel/slide_2.jpg'
import Slide3 from '@/assets/images/carousel/slide_3.jpg'
import Slide4 from '@/assets/images/carousel/slide_4.jpg'
import Slide5 from '@/assets/images/carousel/slide_5.jpg'
import Slide6 from '@/assets/images/carousel/slide_6.jpg'
import Slide7 from '@/assets/images/carousel/slide_7.jpg'
import Slide8 from '@/assets/images/carousel/slide_8.jpg'
import { useEffect, useMemo, useState } from 'react'
import { APP__SETTINGS } from '@/AppSettings'

export const Carousel = () => {
	const { homePageCarouselDelay } = APP__SETTINGS
	const images = useMemo(
		() => [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8],
		[]
	)
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
