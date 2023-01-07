import * as api from "../api/index.js"
import {  Red_EndLoading, Red_FetchBySearch, Red_StartLoading } from "../reducer/reducer.js";

export const getPostsBySearch = (query) => async (dispatch) => {
    try {
      dispatch(Red_StartLoading);
      const {data}= await api.fetchPostsBySearch(query);
dispatch(Red_FetchBySearch(data.data))
 dispatch(Red_EndLoading)
      console.log(data.data)

    } catch (error) {
      console.log(error);
    }
  };