import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://10.0.0.210:3003'
})

export const getText = () => {
  return instance.get('/');
}

// export const getText = () => axios.get('http://localhost:3003');