import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });


export const fetchPostsBySearch = (query) => API.get(`/jobPost/search/query?title=${query}`);

export const getAllPost = (query) => API.get(`/jobPost/getPost/query?page=${query}`);

export const getAllCompany = (query) => API.get(`/company/getAllCompany/query?page=${query}`);


export const getOneUser = (id) => API.get(`/user/getuser/${id}`);

