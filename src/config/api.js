import axios from "axios"

export const BASE_URL = 'https://api.github.com/'

const instanse = axios.create({baseURL: BASE_URL})

export default instanse