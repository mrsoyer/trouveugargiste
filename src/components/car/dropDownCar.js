import React, { useEffect, useState } from 'react'
import { Models } from './models'
import { ModelVersion } from './modelVersion'
import styled from 'styled-components'
import { device } from '../device'

function DropDownCar({
	                     data = [],
	                     isModel = false,
	                     car,
	                     setCar,
	                     setModel,
	                     isModelVersion = false,
	                     model,
	                     setModelVersion,
	                     stateOfButton,
	                     setStateOfButton,
	                     registration,
	                     remove
                     }) {
	const [brandFilter, setBrandFilter] = useState('')
	const [brands, setBrands] = useState(data)


	useEffect(() => {
		return () => {
			const brandsSearched = data.filter(({label}) => {
				const regex = new RegExp(brandFilter, 'i')
				return label.match(regex)
			})
			setBrands(brandsSearched)
		}
	}, [brandFilter])


	const reformatValue = () => {
		let start = registration.substring(0, 2)
		let middle = registration.substring(2, 5)
		let end = registration.substring(5, 8)

		let total = ''

		if (start) {
			total = `${start}`
		}
		if (middle) {
			total = `${start}-${middle}`
		}
		if (end) {
			total = `${start}-${middle}-${end}`
		}

		return total
	}

	return (
		<InputDetail>
			<ButtonContainer>
				<ButtonDivR stateOfButton={stateOfButton}>
					<ButtonRegistration
						stateOfButton={stateOfButton}
						onClick={() => {
							setStateOfButton(false)
							remove()
						}}>
						Immatriculation
					</ButtonRegistration>
					<span/>
				</ButtonDivR>
				<p>ou</p>
				<ButtonDivC stateOfButton={stateOfButton}>
					<ButtonCar
						stateOfButton={stateOfButton}
						onClick={() => {
							setStateOfButton(true)
							remove()
						}}>
						Modèle
					</ButtonCar>
					<span/>
				</ButtonDivC>
			</ButtonContainer>
			{stateOfButton ?
				<>
					{!isModel && <Dropdown>
						<LabelFilter>Liste des marques</LabelFilter>
						<InputFilter placeholder="Filter..." onChange={(e) => setBrandFilter(e.target.value)} value={brandFilter}/>

						{brands.map(({label, id}, index) => (
							<BrandCarList key={`${label}-${index}`} onClick={() => {
								setCar({label, id})
							}}><p>{label}</p></BrandCarList>
						))}
					</Dropdown>}
					{isModel && !isModelVersion && <Models id={car.id} setModel={setModel}/>}
					{isModel && isModelVersion &&
					<ModelVersion id_marque={car.id}
					              id_modele={model.version.id}
					              id_version={model.version.id}
					              setModelVersion={setModelVersion}/>}
				</>
				:
				<RegistrationContainer>
					<input
						value={reformatValue()}
						readOnly
						placeholder="AB-123-CD"
					/>
				</RegistrationContainer>
			}
		</InputDetail>
	)
}

const InputDetail = styled.div`
			background: white !important;
			width: calc(100% - 2px) !important;
			height: 300px !important;
			border: 1px solid #F0F0F0 !important;
			z-index: 1 !important;
			position: absolute !important;
			display: flex !important;
			flex-direction: column !important;
	@media ${device.custom} {
			width: 100% !important;
			height: 100vh !important;
			top: 0 !important;
			left: 0 !important;
	}
`

const Dropdown = styled.div`
			overflow: auto !important;
			margin-top: 10px !important;
			min-height: 100px !important;
`

const LabelFilter = styled.p`
			font-size: 18px !important;
			line-height: 1.6em !important;
			font-weight: 300 !important;
			color: #ff6600 !important;
			user-select: none !important;
			padding: 5px 15px 5px 15px !important;
`

const InputFilter = styled.input`
			font-size: 14px !important;
			padding: 15px 25px 15px 10px !important;
			margin-top: 10px !important;
			margin-bottom: 20px !important;
			margin-left: 15px !important;
			font-weight: 100 !important;
			height: 52px !important;
			width: 70% !important;
			box-sizing: border-box !important;
			background-color: rgb(242, 242, 242) !important;
			line-height: normal !important;
			outline: none !important;
			border-style: solid !important;
			border-color: rgb(240, 240, 240) !important;
    ::placeholder
					{
			font-style: italic !important;
	}
`

const BrandCarList = styled.div`
			width: 100% !important;
			display: flex !important;
			justify-content: flex-start !important;
			flex-direction: column !important;
			text-transform: uppercase !important;
			transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out !important;
			p {
			font-size: 14px !important;
			line-height: 1.5em !important;
			padding: 5px 20px 5px 20px !important;
			font-weight: 600 !important;
			color: #333 !important;
    	:hover {
			background-color: #759d2f !important;
			color: white !important;
			cursor: pointer !important;
    	}
    	@media ${device.custom} {
			padding: 10px 20px 10px 20px !important;
		}
}
`

const ButtonContainer = styled.div`
		margin: 70px 15px 0 15px !important;
		padding-bottom: 10px !important;
		display: flex !important;
		justify-content: space-around !important;
		border-bottom: 1px #F0F0F0 solid !important;
		p {
			font-size: 16px !important;
			font-weight: 400 !important;
			line-height: 1.5em !important;
			color: rgba(0, 0, 0, 0.5) !important;
	    }
`

const ButtonDivC = styled.div`
	display: flex !important;
	flex-direction: column !important;
	span {
		background: #ff6600 !important;
		height: 3px !important;
		width: ${props => props.stateOfButton ? '100% !important' : '0 !important'};
	}
	:hover{
		span {
			width: 100% !important;
			transition: all 0.43s ease-in-out !important;
		}
	}

`

const ButtonDivR = styled(ButtonDivC)`
	span {
		width: ${props => !props.stateOfButton ? '100% !important' : '0 !important'};
	}
`

const ButtonCar = styled.div`
	font-size: 16px !important;
	font-weight: 400 !important;
	line-height: 1.5em !important;
	color: ${props => props.stateOfButton ? 'black !important' : 'rgba(0, 0, 0, 0.5) !important'};
	background: white !important;
	cursor: pointer !important;
	outline: none !important;
    :hover {
		transition: all 0.33s ease-in-out !important;
		color: black !important;
    }
`

const ButtonRegistration = styled(ButtonCar)`
	color: ${props => !props.stateOfButton ? 'black !important' : 'rgba(0, 0, 0, 0.5) !important'};

`

const RegistrationContainer = styled.div`
	display: flex !important;
	align-items: center !important;
	justify-content: center !important;
	width: 100% !important;
	height: 100% !important;
	input {
		border: none !important;
		outline: none !important;
		text-align: center !important;
		width: 100% !important;
		text-transform: uppercase !important;
		font-size: 34px !important;
		font-weight: bold !important;
		    ::placeholder
			{
				color: #CCCCCC !important;
			}
	}	
`

export {
	DropDownCar
}