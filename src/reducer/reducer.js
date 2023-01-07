import {createSlice} from "@reduxjs/toolkit"

const initialState={
    posts:[],
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
      Red_FetchAllPost:(state,action)=>{
state.posts=action.payload
      },

      Red_Login:(state,action)=>{
        localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
    userData=action.payload  
    },
      Red_Logout:(state,action)=>{
        localStorage.clear();
    userData=null 
    },

       }


})
export const {Red_EndLoading,Red_FetchAllPost,Red_FetchBySearch,Red_Login,Red_Logout,Red_StartLoading}= centralStore.actions;
export default centralStore.reducer;