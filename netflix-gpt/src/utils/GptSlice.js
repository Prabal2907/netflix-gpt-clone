import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    MovieNames: null,
    MovieResults: null,
  },
  reducers: {
    toggleSearch: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovies: (state, action) => {
      const { MovieNames, MovieResults } = action.payload;
      state.MovieNames = MovieNames;
      state.MovieResults = MovieResults;
    },
  },
});

export const { toggleSearch, addGptMovies } = gptSlice.actions;
export default gptSlice.reducer;
