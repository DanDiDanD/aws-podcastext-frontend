import axios from 'axios'
import {BASE_URL} from '../utils/constants'

const URL = `http://${localStorage.getItem('URL')}:83`

const clienteAxios = axios.create({
    baseURL: URL
})

export default clienteAxios;