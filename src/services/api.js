//arquivo onde ficam as configurações do axios
import axios from "axios"

export const api = axios.create({
  baseURL: 'https://api-rocketmovies-i06n.onrender.com' //endereço do back-end
})