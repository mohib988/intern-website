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
dispatch(Red_EndLoading())
return data.user
} catch (error) {
      console.log(error);
    }
  };
export const signup= (form) => async (dispatch) => {
    try {
      dispatch(Red_StartLoading())
      const {data:{data}}= await api.signup(form);
      dispatch(Red_Login(data))
      dispatch(Red_EndLoading())
} catch (error) {
      console.log(error);
    }
  };
export const uploadCv = (form) => async (dispatch) => {
    try {
      dispatch(Red_StartLoading())
      dispatch(Red_StartLoading())
      const {data:{data}}= await api.uploadCv(form);
      dispatch(Red_FetchCurrentCandidate(data))
    } catch (error) {
      console.log(error);
    }
  };
export const createProfile = (form) => async (dispatch) => {
    try {
      dispatch(Red_StartLoading())
      const {data:{data}}= await api.createProfile(form);
      dispatch(Red_EndLoading())
    } catch (error) {
      console.log(error);
    }
  };
  export const postSkillOrSummary = (form) => async (dispatch) => {
    try {
      console.log(form)
      dispatch(Red_StartLoading())
      const {data:{data}}= await api.postSkillOrSummary(form)
      dispatch(Red_EndLoading())
      console.log(data)

    } catch (error) {
      console.log(error);
    }
  };
  export const addEducationOrExperience = (form) => async (dispatch) => {
    try {
      console.log(form)
      dispatch(Red_StartLoading())
      const {data:{data}}= await api.addEducationOrExperience(form)
      dispatch(Red_EndLoading())
      console.log(data)

    } catch (error) {
      console.log(error);
    }
  };
  export const updateEducationOrExperience = (form,id) => async (dispatch) => {
    try {
      console.log(form)
      dispatch(Red_StartLoading())
      const {data:{data}}= await api.updateEducationOrExperience(form,id)
      dispatch(Red_EndLoading())
      console.log(data)

    } catch (error) {
      console.log(error);
    }
  };
  export const deleteEducationAndExperience = (form,id) => async (dispatch) => {
    try {
      console.log(form)
      dispatch(Red_StartLoading())
      const {data:{data}}= await api.deleteEducationAndExperience(form,id)
      dispatch(Red_EndLoading())
      console.log(data)

    } catch (error) {
      console.log(error);
    }
  };