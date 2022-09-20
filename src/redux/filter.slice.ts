import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    search: "",
  },
  reducers: {
    searchCountry: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const getSearchTerm = (state: { filters: { search: string } }) =>
  state.filters.search;

export const { searchCountry } = filterSlice.actions;
export default filterSlice.reducer;
