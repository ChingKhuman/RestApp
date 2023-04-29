import axios from 'axios';

const ApiManager = axios.create({
  baseURL: 'http://192.168.1.14:9902',
  responseType: 'json',
  withCredentials: true,
});

export default ApiManager;