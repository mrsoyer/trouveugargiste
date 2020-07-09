import React from 'react'
import { GetInputContainer } from '../getInput'
import { ArrowBack } from '../assets/svg'
import { dataAction } from '../datas/action'
import { DropDownAction } from './dropDownAction'
import styled from 'styled-components'
import { device } from '../device'

function InputAction({icon, open, toggle, toggle2, value, setValue, isSubmit}) {

	function clearInput() {
		setValue('')
	}

	return (
		<GetInputContainer isOpen={open}
		                   placeHolder="(Vidange, Révision, Freinage...)"
		                   Icon={icon}
		                   toggle={toggle}
		                   toggle2={toggle2}
		                   value={value && value.name ? value.name : ''}
		                   id="selectAction"
		                   remove={clearInput}
		                   isSubmit={isSubmit}
		>
			<GoBackBar>
				<div onClick={() => toggle()}><ArrowBack/></div>
				<p>Indiquez la prestation</p>
			</GoBackBar>
			<DropDownAction data={dataAction}
			                setAction={setValue}
			                toggle={toggle}
			/>
		</GetInputContainer>
	)
}

const GoBackBar = styled.div`
 	display: none !important;
 @media ${device.custom} {
 	position: fixed !important;
	height: 50px !important;
	top: 0 !important;
	display: flex !important;
	background-color: rgb(242, 242, 242) !important;
	width: 100% !important;
	div {
		position: absolute !important;
		left: 15px !important;
		top: 50% !important;
		transform: translateY(-50%) !important;
		width: 6% !important;
		display: flex !important;
		align-items: center !important;
		justify-content: center !important;
		cursor: pointer !important;
	}
	p {
		display: flex !important;
		width: 100% !important;
		align-items: center !important;
		justify-content: center !important;
		height: 100% !important;
		font-size: 16px !important;
		line-height: 1.6em !important;
    	font-weight: 300 !important;
        color: black !important;
	}
	}
`

export {
	InputAction
}