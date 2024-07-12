import {configureStore,combineReducers} from "@reduxjs/toolkit";
import { dataSlice } from "./slices/dataSlice";



const reducer=combineReducers({
    
    reusable:dataSlice.reducer

})

export const store=configureStore({
    reducer:reducer

})