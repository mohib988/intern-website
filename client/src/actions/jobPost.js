import * as api from "../api/index.js"
import {  Red_EndLoading, Red_FetchBySearch, Red_StartLoading,Red_FetchAllPosts } from "../reducer/reducer.js";

export const getPostsBySearch = (query) => async (dispatch) => {
    try {
      dispatch(Red_StartLoading());
      const {data:{data}}= await api.fetchPostsBySearch(query);
dispatch(Red_FetchBySearch(data))
 dispatch(Red_EndLoading())
      console.log(data)

    } catch (error) {
      console.log(error);
    }
  };

  
export const getAllPost = (query) => async (dispatch) => {
    try {
      dispatch(Red_StartLoading());
      const {data:{data}}= await api.getAllPost(query);
dispatch(Red_FetchAllPosts(data))
console.log(data)
dispatch(Red_EndLoading())

    } catch (error) {
      console.log(error);
    }
  };
export const createJobPost = (form) => async (dispatch) => {
    try {
      dispatch(Red_StartLoading());
      const {data:{data}}= await api.createJobPost(form);
console.log(data)
dispatch(Red_EndLoading())

    } catch (error) {
      console.log(error);
    }
  };
export const deleteJobPost = (id) => async (dispatch) => {
    try {
      dispatch(Red_StartLoading());
      const {data:{data}}= await api.deleteJobPost(id);
console.log(data)
dispatch(Red_EndLoading())

    } catch (error) {
      console.log(error);
    }
  };
export const applyForJob= (form) => async (dispatch) => {
    try {
     
      const {data:{data}}= await api.applyForJob(form);
console.log(data)


    } catch (error) {
      console.log(error);
    }
  };
export const getPostByArea= (form) => async (dispatch) => {
    try {
     
      const {data:{data}}= await api.getPostByArea(form);
      dispatch(Red_FetchAllPosts(data))

console.log(data)


    } catch (error) {
      console.log(error);
    }
  };


