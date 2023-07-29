import axios from "axios";
import {FINNHUB_API_KEY} from './api_key.jsx'


const finnhub =  axios.create({
  baseURL: "https://finnhub.io/api/v1",
  params: {
    token: FINNHUB_API_KEY
  }
})

export {finnhub} 
