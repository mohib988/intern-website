import axios from 'axios';
import {url} from "../assets/url.js"
const API = axios.create({ baseURL: url });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });
  


export const fetchPostsBySearch = (query) => API.get(`/jobPost/search/query?title=${query}`);

export const getAllPost = (query) => API.get(`/jobPost/getPost/query?page=${query}`);

export const getAllCompany = (query,type) => API.get(`/company/getAllCompany/query?${type}=${query}`);
export const getOneCompany = (id) => API.get(`/company/getOneCompany/${id}`);


export const getOneUser = (id) => API.get(`/user/getuser/${id}`);

export const getAllUser = (query) => API.get(`/user/getAllUser/query?page=${query}`);
export const postSkillOrSummary= (form)=>API.post("/user/SkillAndSummaryUpdate",form)

export const signin = (form) => API.post("/user/signin",form);
export const signup = (form) => API.post("/user/signup",form);
export const uploadCv = (form) => API.post("/user/uploadCv",form);
export const createProfile = (form) => API.post("/user/createprofile",form);
export const addEducationOrExperience = (form) => API.post("/user/addEducationAndExperience",form);
export const updateEducationOrExperience = (form,id) => API.post(`/user/updateEducationAndExperience/${id}`,form);
export const createJobPost= (form) => API.post("/jobPost/createJobPost",form);
export const deleteJobPost= (id) => API.post(`/jobPost/deleteJobPost/${id}`);
export const deleteEducationAndExperience= (form,id) => API.post(`/user/deleteeducationAndexperience/${id}`,form);
export const createCompany= (form) => API.post(`/company/createCompanyProfile`,form);
export const applyForJob= (form) => API.post(`/jobPost/applyForJob`,form);


export const getPostByArea= (form) => API.post(`/jobPost/getPostByArea`,form);
export const updateEmail= (form) => API.post(`/company/updateEmail`,form);
