import axios from "axios";
import UserService from "./UserService";

const token = UserService.getToken()
console.log(token)

const api = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://pethub-hml.cgtecnologia.com.br/api/v1',
  headers: {
    'Accept' : '*/*',
    'Authorization': `Bearer ${token}`
  }
},);

api.interceptors.request.use(config => {
  if (token) {
    console.log(token);
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  }
  return config;
});

export default api;