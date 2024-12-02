import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'
import './Courses.css'
import data from '../../utils/slider.json'
import { sliderSettings } from '../../utils/common'

const Courses = () => {
	return (
		<section className='r-wrapper'>
			<div className='paddings innerWidth r-container'>
				<div className='r-head flexColStart'>
					<span className='orangeText'>Лучший выбор</span>
					<span className='primaryText'>Популярные курсы</span>
				</div>
				<Swiper {...sliderSettings}>
					<SliderButtons />

					{data.map((card, index) => (
						<SwiperSlide key={index}>
							<div className='flexColStart r-card'>
								<img src={card.image} alt={card.name} className='r-image' />
								<span className='secondaryText r-price'>
									<span>{card.price}</span>
									<span style={{ color: 'orange' }}> РУБ</span>
								</span>
								<span className='primaryText'>{card.name}</span>
								<span className='secondaryText'>{card.detail}</span>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	)
}

export default Courses

const SliderButtons = () => {
	const swiper = useSwiper()
	return (
		<div className='flexCenter r-buttons'>
			<button onClick={() => swiper.slidePrev()}>&lt;</button>
			<button onClick={() => swiper.slideNext()}>&gt;</button>
		</div>
	)
}
