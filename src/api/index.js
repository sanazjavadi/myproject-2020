import axios from 'axios'

const token = localStorage.getItem('token');


const instance = axios.create({
  baseURL: 'https://localhost.com/v1',
  headers: {
    'Athurization': `bearer ${token}`
  }
});


export default instance;
