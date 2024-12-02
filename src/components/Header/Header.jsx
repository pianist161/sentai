import React, { useState } from 'react'
import Logo from '../Assets/2.png'
import { BiMenuAltRight } from 'react-icons/bi'
import './Header.css'
import OutsideClickHandler from 'react-outside-click-handler'
const Header = () => {
	// const [menuOpened, setMenuOpened] = useState(false)

	// // Стили для меню
	// const getMenuStyles = menuOpened => {
	// 	return { right: menuOpened ? '0' : '-100%' }
	// }

	return (
		<section className='h-wrapper'>
			<div className='flexCenter paddings innerWidth h-container'>
				{/* Логотип */}
				<img src={Logo} alt='logo' width={130} />

				{/* Меню */}
				{/* <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}> */}
				{/* <div className='flexCenter h-menu ' style={getMenuStyles(menuOpened)}> */}
				<div className='flexCenter h-menu '>
					<a href='#courses'>Наши Курсы</a>
					<a href='#about'>О нас</a>
					<a href='#watch'>Посмотреть</a>
					<button className='button'>
						<a href='#call'>Позвонить</a>
					</button>
				</div>
				{/* </OutsideClickHandler> */}

				{/* Иконка меню */}
				<div className='menu-icon' onClick={() => setMenuOpened(prev => !prev)}>
					<BiMenuAltRight size={30} />
				</div>
			</div>
		</section>
	)
}

export default Header
