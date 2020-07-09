import React from 'react'
import styled from 'styled-components'
import { device } from '../device'
import { Cross } from '../assets/svg'

function InputPlace({Icon, value, setValue, isSubmit = false}) {

	return (

		<InputContainer isSubmit={isSubmit}>
			<Label>
				{Icon && <Icon/>}
			</Label>
			<Input
				autoComplete="off"
				className="inputNumber"
				placeholder="Code Postal"
				type="text"
				value={value}
				onChange={(e) => {
					if (e.target.value.length <= 5) {
						setValue(e.target.value)
					} else return
				}}
			>
			</Input>
			{value && <RemoveButton onClick={() => setValue('')}><Cross/></RemoveButton>}
		</InputContainer>

	)
}

const InputContainer = styled.div`
	display: flex;
    height: 50px;
    position: relative;
    box-shadow: ${props => props.isSubmit ? 'rgba(197, 17, 17, 0.8) 0px 0px 3px 1px' : 'none'};
    width: calc(100% - 2px);
    @media ${device.custom} {
		padding-right: 0;
		margin-bottom: 10px;
	}
`

const Label = styled.label`
	display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F0F0F0;
    color: rgb(255, 102, 0);
    min-width: 50px;
    width: 50px;
    border: 1px solid #F0F0F0;
    height: auto;
    text-align: center;

`

const Input = styled.input`
	background: #fff;
    padding: 0 30px 0 15px;
    border: 1px solid #F0F0F0;
    height: calc(100% - 2px);
    outline: none;
    width: 100%;
    font-size: 14px;
    font-weight: 400;
    ::placeholder
	{
    font-style: italic;
	}
`

const RemoveButton = styled.div`
	position: absolute; 
	top: 50%;
	left: 93%;
	transform: translateY(-50%);
	cursor: pointer;
	@media ${device.laptop} {
		left: 90%;
    }
    @media ${device.custom} {
		left: 95%;
    }
`

export {
	InputPlace
}