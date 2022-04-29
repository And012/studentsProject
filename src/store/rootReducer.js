import { combineReducers, createSlice } from "@reduxjs/toolkit";

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
});

export const {setData} = globalState.actions