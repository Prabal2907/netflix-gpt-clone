import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    NowPlayingMovies: null,
    TopRatedMovies: null,
    AiringTodayTV: null,
    TopRatedTV: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.NowPlayingMovies = action.payload;
    },
    addNowPlayingTV: (state, action) => {
      state.AiringTodayTV = action.payload;
    },
    addNowHighMovies: (state, action) => {
      state.TopRatedMovies = action.payload;
    },
    addNowHighTv: (state, action) => {
      state.TopRatedTV = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addNowPlayingTV,
  addNowHighMovies,
  addNowHighTv,
} = movieSlice.actions;
export default movieSlice.reducer;
