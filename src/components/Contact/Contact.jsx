import React from 'react'
import './Contact.css'
import { MdCall } from 'react-icons/md'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { HiChatBubbleBottomCenter } from 'react-icons/hi2'
const Contact = () => {
	return (
		<section className='c-wrapper'>
			<div className='paddings innerWidth  c-container flexCenter'>
				{/* {left side} */}
				<div className='flexColStart c-left'>
					<span className='orangeText'>Наши Контакты</span>
					<span className='primaryText'>Легко связаться с нами</span>
					<span className='secondaryText'>Мы всегда готовы помочь вам </span>
					<div className='flexColStart contactModes'>
						{/* {first row} */}
						<div className='flexStart  row'>
							{/* {first mode} */}
							<div className='flexColCenter mode'>
								<div className='flexStart'>
									<div className='flexCenter icon'>
										<MdCall size={25} />
									</div>
									<div className='flexColStart detail'>
										<span className='primaryText'>Позвонить</span>
										<span className='secondaryText'>+7-902-562-02-94</span>
									</div>
								</div>
								<div className='flexCenter button'>Позвонить Сейчас</div>
							</div>

							{/* {second mode} */}
							<div className='flexColCenter mode'>
								<div className='flexStart'>
									<div className='flexCenter icon'>
										<BsFillChatDotsFill size={25} />
									</div>
									<div className='flexColStart detail'>
										<span className='primaryText'>Написать</span>
										<span className='secondaryText'>+7-902-562-02-94</span>
									</div>
								</div>
								<div className='flexCenter button'>Написать Сейчас</div>
							</div>
						</div>
						{/* {second row} */}
						<div className='flexStart row'>
							{/* {first mode} */}
							<div className='flexColCenter mode'>
								<div className='flexStart'>
									<div className='flexCenter icon'>
										<BsFillChatDotsFill size={25} />
									</div>
									<div className='flexColStart detail'>
										<span className='primaryText'>Viber</span>
										<span className='secondaryText'>+7-902-562-02-94</span>
									</div>
								</div>
								<div className='flexCenter button'>Позвонить</div>
							</div>

							{/* {second mode} */}
							<div className='flexColCenter mode'>
								<div className='flexStart'>
									<div className='flexCenter icon'>
										<HiChatBubbleBottomCenter size={25} />
									</div>
									<div className='flexColStart detail'>
										<span className='primaryText'>Telegram</span>
										<span className='secondaryText'>+7-902-562-02-94</span>
									</div>
								</div>
								<div className='flexCenter button'>Написать Сейчас</div>
							</div>
						</div>
					</div>
				</div>
				{/* {right side} */}
				<div className='c-right'>
					<div className='image-container'>
						<img src='/public/contact.jpg' alt='' />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact
