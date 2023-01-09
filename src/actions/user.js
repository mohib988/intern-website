import * as api from "../api/index.js"
import { Red_EndLoading,Red_StartLoading,Red_FetchCurrentCandidate,Red_FetchAllCandidates, Red_Login } from "../reducer/reducer.js";

export const getOneCandidate = (id) => async (dispatch) => {
    try {
      dispatch(Red_StartLoading())
      const {data:{data}}= await api.getOneUser(id);
dispatch(Red_FetchCurrentCandidate(data))

console.log(data)
dispatch(Red_EndLoading())
    } catch (error) {
      console.log(error);
    }
  };

export const getAllCandidate = (query) => async (dispatch) => {
    try {
      dispatch(Red_StartLoading())
      const {data:{data}}= await api.getAllUser(query);
dispatch(Red_FetchAllCandidates(data))
console.log(data)
dispatch(Red_EndLoading())
    } catch (error) {
      console.log(error);
    }
  };
export const signin = (form) => async (dispatch) => {
    try {
      dispatch(Red_StartLoading())
      const {data:{data}}= await api.signin(form);
dispatch(Red_Login(data))
return data.user
dispatch(Red_EndLoading())
    } catch (error) {
      console.log(error);
    }
  };