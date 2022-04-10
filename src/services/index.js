import axios from 'axios';

export const API = axios.create({
  baseURL: `https://api-meli-test.herokuapp.com/`,
});
// api post
export const APIPost = (data) => API.post('auth', data);
// api get
export const APIGet = () => API.get('/');