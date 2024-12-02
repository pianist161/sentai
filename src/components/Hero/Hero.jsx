import React from 'react'
import './Hero.css'
import { HiLocationMarker } from 'react-icons/hi'
import { animate, motion } from 'framer-motion'
import CountUp from 'react-countup'
const Hero = () => {
	return (
		<section className='hero-wrapper'>
			<div className='paddings innerWidth flexCenter hero-container '>
				<div className='flexColStart hero-left'>
					<div className='hero-title'>
						<div className='orange-circle'></div>
						<motion.h1 initial={{ y: '2rem', opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 2, type: 'spring' }}>
							Открой для себя
							<br />
							Самые лучшие <br />
							Курсы
						</motion.h1>
					</div>
					<div className='flexColStart hero-des'>
						<span className='secondaryText'>Найди вариант который подходит тебе</span>
						<span className='secondaryText'> Забудь все сложности в поиске подходящего курса для тебя</span>
					</div>
					{/* <div className='flexCenter search-bar'>
						<HiLocationMarker color='var(--blue)' size={25} />
						<input type='text' />
						<button className='button'>Search</button>
					</div> */}
					<div className='flexCenter stats'>
						<div className='flexColCenter stat'>
							<span>
								<CountUp start={0} end={100} duration={4} />
								<span>+</span>
							</span>
							<span className='secondaryText'>Колличество учеников</span>
						</div>
						<div className='flexColCenter stat'>
							<span>
								<CountUp start={0} end={50} duration={4} />
								<span>+</span>
							</span>
							<span className='secondaryText'>Довольных клиентов</span>
						</div>
						<div className='flexColCenter stat'>
							<span>
								<CountUp start={0} end={5} />
								<span>+</span>
							</span>
							<span className='secondaryText'>Курсы</span>
						</div>
					</div>
				</div>
				<div className='flexCenter hero-right'>
					<motion.div
						initial={{ x: '7rem', opacity: 0 }}
						animate={{ x: '0', opacity: 1 }}
						transition={{ duration: 2, type: 'spring' }}
						className='image-container'
					>
						<img src='./edu.jpg' alt='' />
					</motion.div>
				</div>
			</div>
		</section>
	)
}

export default Hero
