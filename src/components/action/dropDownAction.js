import React from 'react'
import styled from 'styled-components'
import { device } from '../device'

function DropDownAction({data, setAction, toggle}) {

	function createKey(input) {
		return input ? input.toString().trim() : Math.random() * (200000)
	}


	return (
		<InputDetail>
			{data && <Dropdown>

				{data.map((index) => (
					<ActionList key={createKey(index.name)}>
						<h4>{index.name}</h4>
						{index.children && index.children.map((indexChildren) => (
							<p key={createKey(indexChildren.serviceId)} onClick={() => {
								setAction(indexChildren)
								toggle()
							}}>

								{indexChildren.name}

							</p>
						))}
					</ActionList>
				))}
			</Dropdown>}
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
	margin-top: 70px !important;
	min-height: 100px !important;
`

const ActionList = styled.div`
	width: 100% !important;
	display: flex !important;
    justify-content: flex-start !important;
    flex-direction: column !important;
    text-transform: uppercase !important;
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
	DropDownAction
}