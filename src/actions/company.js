import * as api from "../api/index.js"
import {  Red_EndLoading, Red_FetchBySearch, Red_StartLoading,Red_FetchAllCompanies } from "../reducer/reducer.js";


export const getAllCompany = (query) => async (dispatch) => {
    try {
      dispatch(Red_StartLoading);
      const {data:{data}}= await api.getAllCompany(query);
dispatch(Red_FetchAllCompanies(data))
 dispatch(Red_EndLoading)

      console.log("company")
      console.log(data)

    } catch (error) {
      console.log(error);
    }
  };