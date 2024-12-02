import React from 'react'
import logo from '../Assets/1.png'
import './Footer.css'
const Footer = () => {
	return (
		<section className='f-wrapper'>
			<div className='paddings innerWidth flexCenter f-container'>
				{/* {Left side} */}
				<div className='flexColStart f-left'>
					<img src={logo} width={150} alt='' />
					<span className='secondaryText'>Наша миссия дать образование.</span>
				</div>
				{/* {right side} */}
				<div className='flexColStart f-right'>
					<span className='primaryText'>Информация</span>
					<span className='secondaryText'>Бульвар Карла Маркса 2б, Улан-Удэ, Россия</span>
					<div className='flexCenter f-menu'>
						<span>Наши Курсы</span>
						<span>Услуги</span>
						<span>О нас</span>
						<span>Позвонить</span>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Footer
