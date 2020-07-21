import React, { useState } from 'react'
import './App.css'
import { Reset } from 'styled-reset'
import { GlobalStyle } from './components/injectGlobal'
import styled from 'styled-components'
import { Car, Cog, Marker } from './components/assets/svg'
import { device } from './components/device'
import { InputCar } from './components/car/inputCar'
import { InputAction } from './components/action/inputAction'
import { InputPlace } from './components/place/inputPlace'

function App() {
	const [openField2, setOpenField2] = useState(false)
	const [openField3, setOpenField3] = useState(false)

	const [postalCode, setPostalCode] = useState('')
	const [isValidPostalCode, setIsValidPostalCode] = useState(true)

	const [action, setAction] = useState('')

	const defaultValue = {label: null, id: null}
	const [car, setCar] = useState(defaultValue)
	const [model, setModel] = useState(defaultValue)
	const [modelVersion, setModelVersion] = useState(defaultValue)

	const [registration, setRegistration] = useState('')
	const [stateOfButton, setStateOfButton] = useState(false)

	const [error, setError] = useState({actionError: false, carError: false, postalCodeError: false, registrationError: false})

	function ObjEquality(obj1, obj2) {
		return JSON.stringify(obj1) === JSON.stringify(obj2)
	}

	function checkAction(action) {
		if (action.length === 0) {
			return true
		} else {
			return false
		}
	}

	function checkRegistration(registration) {
		if (registration.length < 7) {
			return true
		} else {
			return false
		}
	}

	function checkCar(car, defaultValue) {
		if (ObjEquality(car, defaultValue) || ObjEquality(model, defaultValue)) {
			return true
		}
		return false
	}

	function checkError() {
		return {
			actionError: checkAction(action),
			carError: checkCar(car, defaultValue),
			postalCodeError: checkPostalCode(isValidPostalCode),
			registrationError: checkRegistration(registration)
		}
	}

	const checkIsNumber = (input) => {
		const regex = /^[0-9]*$/gm
		return !!(input.match(regex) && input && input.length === 5)
	}

	function checkPostalCode() {
		return checkIsNumber(postalCode) === false
	}


	const submitForm = (e) => {
		e.preventDefault()
		const {actionError, carError, postalCodeError, registrationError} = checkError()
		setError({actionError, carError, postalCodeError, registrationError})
		if (stateOfButton === true) {
			if (actionError || carError || postalCodeError) {
				return
			} else {
				return window.location.href = `http://results.trouveungaragiste.com/api/Garage/compar/${postalCode}/${action.serviceId}/${car.id}/${model.version.id}/${modelVersion.id}`
			}
		} else if (stateOfButton === false) {
			if (actionError || registrationError || postalCodeError) {
				return
			} else {
				return window.location.href = `http://results.trouveungaragiste.com/api/Garage/compar/${postalCode}/${action.serviceId}/${registration}`
			}
		}
	}

	const toggle = (setField, field) => {
		if (!field)
			setField(true)
		else
			setField(false)
	}

	const toggle2 = (setField, field) => {
		if (!field)
			setField(true)
	}


	return (
		<>
			<Reset/>
			<GlobalStyle/>
			<GlobalContainer>
				<FilterContainer>
					<Form id="form"
					      method="post"
					      onSubmit={(e) => submitForm(e)}>
						<InputPlace
							Icon={() => <Marker/>}
							value={postalCode}
							setValue={(e) => setPostalCode(e)}
							setIsValidValue={(e) => setIsValidPostalCode(e)}
							isSubmit={error.postalCodeError}
							validateError={checkError}
						/>
						<Spacer/>
						<InputAction
							icon={() => <Cog/>}
							open={openField2}
							toggle={() => toggle(setOpenField2, openField2)}
							toggle2={() => toggle2(setOpenField2, openField2)}
							value={action}
							setValue={(e) => setAction(e)}
							isSubmit={error.actionError}
						/>
						<Spacer/>
						<InputCar
							registration={registration}
							setRegistration={(e) => setRegistration(e)}
							stateOfButton={stateOfButton}
							setStateOfButton={(e) => setStateOfButton(e)}
							icon={() => <Car/>}
							car={car}
							modelVersion={modelVersion}
							setModelVersion={(e) => setModelVersion(e)}
							model={model}
							setCar={(e) => setCar(e)}
							setModel={(e) => setModel(e)}
							isSubmit={stateOfButton ? error.carError : error.registrationError}
							open={openField3}
							toggle={() => toggle(setOpenField3, openField3)}
							toggle2={() => toggle2(setOpenField3, openField3)}
						/>
						<Spacer/>
						<InputSubmit form="form" type="submit">
							Trouve un garagiste
						</InputSubmit>
					</Form>
				</FilterContainer>
			</GlobalContainer>
		</>
	)
}

const GlobalContainer = styled.div`
	width: 100% !important;
	display: flex !important;
	justify-content: center !important;
	align-items: center !important;
`

const FilterContainer = styled.div`
	background-color: #6280BE !important;
    border-radius: 4px !important;
    padding: 10px !important;
    width: 95% !important;
    max-width: 1170px !important;
    @media ${device.custom} {
    	width: 90% !important;
    }    
`

const Form = styled.form`	
	display: flex !important;
	align-items: center !important;
	@media ${device.custom} {
		flex-direction: column !important;
	}
`

const Spacer = styled.div`
	width: 30px !important;
	@media ${device.custom} {
		display: none !important;
	}
`

const InputSubmit = styled.button`
	white-space: nowrap !important;
    text-transform: uppercase !important;
    color: white !important;
    cursor: pointer !important;
    width: 70% !important;
    font-size: 18px !important;
    font-style: normal !important;
    font-weight: 400 !important;
    user-select: none !important;
    outline: none !important;
    background-color: #66bb6a !important;
    height: 50px !important;
    line-height: 50px !important;
    border-width: 0 !important;
    border-style: solid !important;
    border-color: transparent !important;
	@media ${device.custom} {
		width: 100% !important;
	}
	:active {
		box-shadow: rgba(0, 0, 0, 0.75) 0px 0px 3px 1px !important;
	}
`

export default App
