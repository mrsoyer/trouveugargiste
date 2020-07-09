import {useQuery} from 'react-query'
import axios from 'axios'

const api_url = 'https://s-y-m.herokuapp.com/api'

const getBrands = async () => {
  const {data} = await axios.get(
    `${api_url}/Garage/listMarques/`,
  )
  return data
}

const getModelById = async (_, id) => {
  const { data } = await axios.get(
    `${api_url}/Garage/listModels/${id}`
  );
  return data;
};


const getModelVersion = async (_, props) => {
  const {id_marque, id_modele, id_version} = props
  const { data } = await axios.get(
    `${api_url}/Garage/listVersionsByModel/${id_marque}/${id_modele}/${id_version}`
  );
  return data;
};

export function useModelVersion({props}) {
  return useQuery(["version", props], getModelVersion)
}

export function useModels(id) {
  return useQuery(["model", id], getModelById)
}
export function useBrands() {
  return useQuery('brands', getBrands)
}
