import { createSlice } from "@reduxjs/toolkit";

const initialState={
    syamdata:{}
}

export const dataSlice=createSlice({
    name:"store",
    initialState,
    reducers:{
        setsyamdata:(state,action)=>{
            state.syamdata=action.payload
        }
    }

})

export const {setsyamdata}=dataSlice.actions