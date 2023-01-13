import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });


export const fetchPostsBySearch = (query) => API.get(`/jobPost/search/query?title=${query}`);

export const getAllPost = (query) => API.get(`/jobPost/getPost/query?page=${query}`);

export const getAllCompany = (query) => API.get(`/company/getAllCompany/query?page=${query}`);
export const getOneCompany = (id) => API.get(`/company/getOneCompany/${id}`);


export const getOneUser = (id) => API.get(`/user/getuser/${id}`);

export const getAllUser = (query) => API.get(`/user/getAllUser/query?page=${query}`);
export const signin = (form) => API.post("/user/signin",form);
export const uploadCv = (form) => API.post("/user/uploadCv",form);
export const createProfile = (form) => API.post("/user/createprofile",form);

