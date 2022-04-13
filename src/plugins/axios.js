import axios from 'axios';

const instance = axios.create({
  baseURL: './',
  timeout: 1000 * 60 * 10,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
  },
});

instance.interceptors.request.use(
  config => {
    console.log('request', config);
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  res => {
    console.log('response', res);
    return res;
  },
  error => {
    return Promise.reject(error);
  }
);

export default instance;
