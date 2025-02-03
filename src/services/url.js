import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

// Attach token to requests
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) req.headers.Authorization = token;
  return req;
});

export const loginUser = (data) => API.post('/user/login', data);
export const registerUser = (data) => API.post('/user/register', data);
export const fetchProfile = () => API.get('/user/profile');
export const createShortUrl = (data) => API.post('/url/shorten', data);
export const getUrls = () => API.get('/url');
