//create a slice using createSlice function
// create an initial state
// create reducer actions

import { createSlice } from "@reduxjs/toolkit";

// defining the initial state so that we can use that into slice

const initialState={
  isModalOpen:false
}

const modalSliceNew=createSlice({
  name:"modal-new",
  initialState,
  reducers:{
    openModalNew: state=>{
      state.isModalOpen=true
    },
    closeModalNew: state=>{
      state.isModalOpen=false
    }
  }

})

export const {openModalNew,closeModalNew}=modalSliceNew.actions
export default modalSliceNew.reducer