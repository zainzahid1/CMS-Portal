import axios from 'axios'

const instance = axios.create({
    baseURL: "http://localhost/Reactjscrud/"
})

export default instance;