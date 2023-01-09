import * as api from "../api/index.js"
import { Red_EndLoading,Red_StartLoading,Red_FetchCurrentCandidate,Red_FetchAllCandidates } from "../reducer/reducer.js";

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