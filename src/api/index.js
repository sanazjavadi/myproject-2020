import axios from 'axios'

const token = localStorage.get('token');


const instance = axios.create({
  baseURL: 'https://localhost.com/v1',
  headers: {
    'Athurization': `bearer ${token}`
  }
});


export default instance;
