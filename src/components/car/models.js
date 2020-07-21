import { useModels } from '../../hooks/useCar.hook'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { device } from '../device'

function Models({id = null, setModel}) {
	const {data, isFetching, error} = useModels(id)

	const [modelFilter, setModelFilter] = useState('')
	const [models, setModels] = useState([])

	useEffect(() => {
		if (data && 'modelsByMake' in data.data) {
			setModels(data.data.modelsByMake)
		}
	}, [data])

	useEffect(() => {
		if (!data) return
		const filteredModels = data.data.modelsByMake.filter(({label}) => {
			const regex = new RegExp(modelFilter, 'i')
			return label.match(regex)
		})

		setModels(filteredModels)
		return () => {
			const filteredModels = data.data.modelsByMake.filter(({label}) => {
				const regex = new RegExp(modelFilter, 'i')
				return label.match(regex)
			})

			setModels(filteredModels)
		}
	}, [modelFilter])

	return (
		<Dropdown>
			<LabelFilter>Liste des modèles</LabelFilter>
			<InputFilter placeholder="Filter..." onChange={(e) => setModelFilter(e.target.value)}/>
			{models.map((model, index) => (
				<ModelCarList key={`${model}-${index}`}>
					<h4>m: {model.label}</h4>
					{model.version.map((version, i) => (
						<p key={`${model}-${version}-${i}`} onClick={() => {
							setModel({version, id})
						}}>v: {version.label}</p>
					))}
				</ModelCarList>
			))}
		</Dropdown>
	)
}

const Dropdown = styled.div`
	overflow: auto !important;
	margin-top: 10px !important;
	min-height: 100px !important;
`

const LabelFilter = styled.p`
	font-size: 18px !important;
    line-height: 1.6em !important;
    font-weight: 300 !important;
    color: #FB6747 !important;
    user-select: none !important;
    padding: 5px 15px 5px 15px !important;
`

const InputFilter = styled.input`
    font-size: 14px !important;
    padding: 15px 25px 15px 10px !important;
    margin-top: 10px !important;
    margin-bottom: 10px !important;
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

const ModelCarList = styled.div`
	width: 100% !important;
	display: flex !important;
    justify-content: flex-start !important;
    flex-direction: column !important;
    text-transform: uppercase !important;
    user-select: none !important;
    transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out !important;
    h4 {
        line-height: 1.6em !important;
        font-weight: 300 !important;
    	color: #FB6747 !important;
    	padding-left: 15px !important;
     	font-size: 18px !important;
     	padding-bottom: 10px !important;
     	padding-top: 10px !important;
    }
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

export {
	Models
}