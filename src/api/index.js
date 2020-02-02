import axios from 'axios'


const instance = axios.create({
  baseURL: 'https://localhost.com/v1/',
});


export default instance;
