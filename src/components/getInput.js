import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { device } from './device'
import { Cross } from './assets/svg'

function GetInputContainer({
	                           error,
	                           setError,
	                           remove,
	                           toggle,
	                           toggle2,
	                           value,
	                           isOpen,
	                           placeHolder,
	                           children,
	                           id,
	                           Icon,
	                           isSubmit,
	                           setRegistration,
                           }) {

	const wrapperRef = useRef(null)

	function handleClickOutside(event) {
		if (wrapperRef && !wrapperRef.current.contains(event.target)) {
			if (wrapperRef.current.id === id && isOpen) {
				return toggle()
			}
			return
		}
		if (error) setError(false)
	}

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	})

	return (
		<InputContainer isOpen={isOpen}  ref={wrapperRef} isSubmit={isSubmit} id={id}>
			<Label>
				{Icon && <Icon isOpen={isOpen}/>}
			</Label>
			<Input
				type="text"
				id={id}
				autoComplete="off"
				open={isOpen}
				onClick={toggle2}
				onChange={(e) => {
					if (placeHolder === 'Véhicule' && e.target.value.length <= 8) {
						setRegistration(e.target.value)
					} else return
				}}
				placeholder={placeHolder}
				value={value}>
			</Input>
			{value && <RemoveButton onClick={remove}><Cross/></RemoveButton>}
			{isOpen && children && children}
		</InputContainer>
	)
}


const InputContainer = styled.div`
	display: flex !important;
    height: 50px !important;
    position: relative !important;
    box-shadow: ${props => props.isSubmit ? 'rgba(197, 17, 17, 0.8) 0px 0px 3px 1px !important' : 'none !important'};
    width: calc(100% - 2px) !important;
    z-index: 1 !important;
    @media ${device.custom} {
		padding-right: 0 !important;
		margin-bottom: 10px !important;
		z-index: ${({isOpen}) => isOpen ? '50 !important' : 'inherit !important'};;
		position: ${({isOpen}) => isOpen ? 'fixed !important' : 'relative !important'};;
		top: ${({isOpen}) => isOpen ? '50px !important' : 'inherit !important'};
	}
`

const Label = styled.label`
	display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    background-color: #F0F0F0 !important;
    color: rgb(255, 102, 0) !important;
    min-width: 50px !important;
    width: 50px !important;
    border: 1px solid #F0F0F0 !important;
    z-index: 3 !important;
    height: auto !important;
    text-align: center !important;

`

const Input = styled.input`
	background: #fff !important;
    padding: 0 30px 0 15px !important;
    border: 1px solid #F0F0F0 !important;
    height: calc(100% - 2px) !important;
    z-index: 3 !important;
    outline: none !important;
    width: 100% !important;
    font-size: 14px !important;
    font-weight: 400 !important;
    ::placeholder
	{
    font-style: italic !important;
	}
`

const RemoveButton = styled.div`
	position: absolute !important; 
	top: 50% !important;
	left: 93% !important;
	transform: translateY(-50%) !important;
	z-index: 37 !important;
	cursor: pointer !important;
	@media ${device.laptop} {
		left: 90% !important;
    }
    @media ${device.custom} {
		left: 95% !important;
    }
`

export {
	GetInputContainer
}