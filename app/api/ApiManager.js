import axios from 'axios'

const ApiManager = axios.create({
    baseURL: 'http//localhost:3001/api/listings',
    responseType: 'json',
    withCredentials: true,
})

export default ApiManager