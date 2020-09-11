import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/challenge-88129/us-central1/api' // The Api Url
})

export default instance;