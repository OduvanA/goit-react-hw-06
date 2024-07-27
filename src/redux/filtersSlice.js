import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    filters: {
      name: "",
    }
  },
  reducers: {
    changeFilter(state, action) { },
    selectNameFilter(state, action) { },
  }
});

export const { changeFilter, selectNameFilter } = filtersSlice.action;
export default filtersSlice.reducer;