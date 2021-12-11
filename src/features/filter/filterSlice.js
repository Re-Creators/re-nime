import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: null,
  variable: null,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setVariable: (state, action) => {
      state.variable = action.payload;
    },
  },
});

export const { setTitle, setVariable } = filterSlice.actions;

export const selectTitle = (state) => state.filter.title;
export const selectVariable = (state) => state.filter.variable;

export default filterSlice.reducer;
