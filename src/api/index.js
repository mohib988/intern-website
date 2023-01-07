import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });


export const fetchPostsBySearch = (query) => API.get(`/jobPost/getPost/query?title=${query}`);