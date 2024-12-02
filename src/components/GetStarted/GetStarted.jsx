import React from 'react'
import './GetStarted.css'
const GetStarted = () => {
	return (
		<section className='g-wrapper'>
			<div className='paddings innerWidth g-container'>
				<div className='flexColCenter inner-container'>
					<span className='primaryText'>Начни с Сентай</span>
					<span className='secondaryText'>Подпишись и найди для себя лучший курс</span>
					<button className='button'>
						<a href='mailto:sentai@mail.ru'>Подписаться</a>
					</button>
				</div>
			</div>
		</section>
	)
}

export default GetStarted
