import { combineReducers, createSlice } from "@reduxjs/toolkit";
import {astxaStateSlice} from "../components/anna/astxaState"

export const globalState = createSlice({
  name: "Mecarenc",
  initialState: {
    name: "Mecarenc",
    data: null
  },
  reducers: {
    setData:(state,{payload})=>{
      state.data = payload
    },
    setName :(state,{payload})=>{
      state.name = payload
    },
    setRemove:(state,{payload})=>{
      state.data = null
    },
  },
});

export const rootReducer = combineReducers({
  Mecarenc: globalState.reducer,
  astxaState: astxaStateSlice.reducer,
});

export const {setData,setRemove,setName} = globalState.actions