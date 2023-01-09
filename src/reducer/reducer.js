import {createSlice} from "@reduxjs/toolkit"

const initialState={
    posts:[],
    companies:[],
    currentCompany:{},
    currentCandidate:{},
candidates:[],
    isLoading:true,
    userData:null,
}
export const centralStore=createSlice({
  name:"centralStore",
  initialState,
  reducers:{

      Red_StartLoading:(state)=>{
state.isLoading=true
      },
      Red_EndLoading:(state)=>{
state.isLoading=false
      },
      Red_FetchBySearch:(state,action)=>{
state.posts=action.payload
      },
      Red_FetchAllPosts:(state,action)=>{
state.posts=action.payload
      },
      Red_FetchAllCandidates:(state,action)=>{
state.candidates=action.payload
      },
      Red_FetchAllCompanies:(state,action)=>{
state.companies=action.payload
      },
      Red_Login:(state,action)=>{
        localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
    state.userData=action.payload  
    },
      Red_Logout:(state,action)=>{
        localStorage.clear();
    state.userData=null 
    },
      Red_FetchCurrentCandidate:(state,action)=>{
state.currentCandidate={...(action.payload),type:"candidate"}

       },
      Red_FetchCurrentCompany:(state,action)=>{
state.currentCompany={...(action.payload),type:"company"}

       },

      }
})
export const {Red_EndLoading,Red_FetchAllPosts,Red_FetchBySearch,Red_Login,Red_Logout,Red_StartLoading,Red_FetchAllCandidates,Red_FetchAllCompanies,Red_FetchCurrentCandidate,Red_FetchCurrentCompany}= centralStore.actions;
export default centralStore.reducer;