import React from 'react'
import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
	AccordionItemState,
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import './Value.css'

import data from '../../utils/accordion'

const Value = () => {
	return (
		<div className='paddings innerWidth flexCenter v-container'>
			{/* {Left side} */}
			<div className='v-left'>
				<div className='image-container'>
					<img src='/value.png' alt='' />
				</div>
			</div>
			{/* {right side} */}
			<div className='flexColStart v-right'>
				<span className='orangeText'>Наша ценость</span>
				<span className='primaryText'>Мы заботимся о вас</span>
				<span className='secondaryText'>Мы всегда готовы предоставить вам лучший сервис</span>
				<Accordion className='accordion' allowMultipleExpanded={false} preExpanded={[0]}>
					{data.map((item, index) => {
						return (
							<AccordionItem className='accordionItem' key={index} uuid={index}>
								<AccordionItemHeading>
									<AccordionItemButton className='flexCenter accordionItemButton'>
										<div className='flexCenter icon'>{item.icon}</div>
										<span className='primaryText'>{item.heading}</span>
										<div className='flexCenter icon'>
											<MdOutlineArrowDropDown size={20} />
										</div>
									</AccordionItemButton>
								</AccordionItemHeading>
								<AccordionItemPanel>
									<p className='secondaryText'>{item.detail}</p>
								</AccordionItemPanel>
							</AccordionItem>
						)
					})}
				</Accordion>
			</div>
		</div>
	)
}

export default Value
