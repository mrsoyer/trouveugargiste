import React, { useEffect, useState } from 'react'
import { useBrands } from '../../hooks/useCar.hook'
import { GetInputContainer } from '../getInput'
import { DropDownCar } from './dropDownCar'
import styled from 'styled-components'
import { device } from '../device'
import { ArrowBack } from '../assets/svg'

function ObjEquality(obj1, obj2) {
	return JSON.stringify(obj1) === JSON.stringify(obj2)
}

function InputCar({
	                  icon,
	                  open,
	                  toggle,
	                  toggle2,
	                  car, model,
	                  setCar,
	                  setModel,
	                  isSubmit,
	                  registration,
	                  setRegistration,
	                  stateOfButton,
	                  setStateOfButton,
	                  modelVersion,
	                  setModelVersion
                  }) {

	const defaultValue = {label: null, id: null}

	const [inputValue, setInputValue] = useState('')
	const [errorCar, setErrorCar] = useState(false)
	const {data, error, isFetching} = useBrands()

	useEffect(() => {
		setInputValue(`${ObjEquality(car, defaultValue) ? ''
			: car.label}${ObjEquality(car, defaultValue) ? ''
			: ' / '}${ObjEquality(model, defaultValue) ? ''
			: model.version.label}${ObjEquality(modelVersion, defaultValue) ? ''
			: ' / '}${ObjEquality(modelVersion, defaultValue) ? ''
			: modelVersion.label}`)
	}, [car, model, modelVersion])

	useEffect(() => {
		if (!ObjEquality(modelVersion, defaultValue)) {
			toggle()
		}
	}, [modelVersion])
	if (!data) return null

	const {listMakes} = data.data
	const isModel = car.label !== null
	const isModelVersion = model.label !== null

	function clearInput() {
		setCar(defaultValue)
		setModel(defaultValue)
		setModelVersion(defaultValue)
		setRegistration('')
	}

	return (
		<GetInputContainer error={errorCar}
		                   isOpen={open}
		                   setError={setErrorCar}
		                   placeHolder="Véhicule"
		                   Icon={icon}
		                   toggle={toggle}
		                   toggle2={toggle2}
		                   value={stateOfButton ? inputValue : registration}
		                   setRegistration={(e) => setRegistration(e)}
		                   id="selectCar"
		                   remove={clearInput}
		                   isSubmit={isSubmit}
		>
			<GoBackBar>
				<div onClick={() => toggle()}><ArrowBack/></div>
				<p>Sélectionnez votre véhicule</p>
			</GoBackBar>
			<DropDownCar data={listMakes}
			             isModel={isModel}
			             car={car}
			             setCar={setCar}
			             setModel={setModel}
			             model={model}
			             remove={clearInput}
			             isModelVersion={isModelVersion}
			             setModelVersion={setModelVersion}
			             stateOfButton={stateOfButton}
			             setStateOfButton={setStateOfButton}
			             registration={registration}
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
	InputCar
}