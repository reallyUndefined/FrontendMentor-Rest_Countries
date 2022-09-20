import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    search: "",
    region: "",
  },
  reducers: {
    searchCountry: (state, action) => {
      state.search = action.payload;
    },
    filterRegion: (state, action) => {
      state.region = action.payload;
    },
  },
});

export const getSearchTerm = (state: { filters: { search: string } }) =>
  state.filters.search;
export const getFilterRegion = (state: { filters: { region: string } }) =>
  state.filters.region;

export const { searchCountry, filterRegion } = filterSlice.actions;
export default filterSlice.reducer;
