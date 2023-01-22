import * as api from "../api/index.js"
import {  Red_EndLoading, Red_FetchBySearch, Red_StartLoading,Red_FetchAllCompanies,Red_FetchCurrentCompany } from "../reducer/reducer.js";


export const getAllCompany = (query,type) => async (dispatch) => {
    try {
      dispatch(Red_StartLoading());
      const {data:{data}}= await api.getAllCompany(query,type);
dispatch(Red_FetchAllCompanies(data))
 dispatch(Red_EndLoading())

      console.log("company")
      console.log(data)

    } catch (error) {
      console.log(error);
    }
  };
export const getOneCompany = (id) => async (dispatch) => {
    try {
      dispatch(Red_StartLoading());
      const {data:{data}}= await api.getOneCompany(id);
dispatch(Red_FetchCurrentCompany(data))
 dispatch(Red_EndLoading())

      console.log("company")
      console.log(data)

    } catch (error) {
      console.log(error);
    }
  };


export const createCompany = (form) => async (dispatch) => {
    try {
      dispatch(Red_StartLoading());
      const {data:{data}}= await api.createCompany(form);
// dispatch(Red_FetchCurrentCompany(data))
 dispatch(Red_EndLoading())

      console.log("company")
      console.log(data)

    } catch (error) {
      console.log(error);
    }
  };
export const updateEmail = (form) => async (dispatch) => {
    try {
      dispatch(Red_StartLoading());
      const {data:{data}}= await api.updateEmail(form);

 dispatch(Red_EndLoading())

      console.log("company")
      

    } catch (error) {
      console.log(error);
    }
  };


