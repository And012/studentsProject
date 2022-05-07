import { combineReducers, createSlice } from "@reduxjs/toolkit";
import {astxaStateSlice} from "../components/anna/astxaState"

export const globalState = createSlice({
  name: "globalName",
  initialState: {
    name: "Mecarenc",
    data: null
  },
  reducers: {
    setData:(state,{payload})=>{
      state.data = payload
    }
  },
});

export const rootReducer = combineReducers({
  globalName: globalState.reducer,
  astxaState: astxaStateSlice.reducer,
});

export const {setData} = globalState.actions