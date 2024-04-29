import axios from 'axios'
import { set } from 'lodash'


// const DEV_API_URL = 'http://172.16.14.13:8082/controle_patio'

const BUILD_API_URL =  import.meta.env.VITE_REACT_API_URL

export const BASE_API_URL =BUILD_API_URL

export const api = axios.create({
  baseURL: BASE_API_URL,
  timeout: 15000,
})

set(api, 'defaults.header.Accept', 'application/json')


export default api