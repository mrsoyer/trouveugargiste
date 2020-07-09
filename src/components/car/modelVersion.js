import { useModelVersion } from '../../hooks/useCar.hook'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { device } from '../device'

function ModelVersion({id_marque, id_modele, id_version, setModelVersion}) {
	const {data} = useModelVersion({props: {id_marque, id_modele, id_version}})

	const [versionFilter, setVersionFilter] = useState('')
	const [versions, setVersions] = useState([])

	useEffect(() => {
		if (!data) return
		const brandsSearched = data.data.versionsByModel.filter(({label}) => {
			const regex = new RegExp(versionFilter, 'i')
			return label.match(regex)
		})
		setVersions(brandsSearched)
		return () => {
			const brandsSearched = data.data.versionsByModel.filter(({label}) => {
				const regex = new RegExp(versionFilter, 'i')
				return label.match(regex)
			})
			setVersions(brandsSearched)
		}
	}, [versionFilter])

	useEffect(() => {
		if (data && 'versionsByModel' in data.data) {
			setVersions(data.data.versionsByModel)
		}
	}, [data])

	return (
		<Dropdown>
			<LabelFilter>Liste des versions</LabelFilter>
			<InputFilter placeholder="Filter..." onChange={(e) => setVersionFilter(e.target.value)}/>
			<ModelVersionCarList>
				{versions.map((version, i) => (
					<p onClick={() => setModelVersion(version)} key={`${version.label}-${i}`}>{version.label}</p>
				))}
			</ModelVersionCarList>
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

const ModelVersionCarList = styled.div`
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
    	color: #ff6600 !important;
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
	ModelVersion
}