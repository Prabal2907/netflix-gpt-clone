import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice.js"; 
import moviesReducer from "./MovieSlice.js"
import gptReducer from "./GptSlice.js"

const appStore = configureStore({
  reducer: {
    user: userReducer, 
    movies:moviesReducer,
    gpt:gptReducer
  },
});

export default appStore;
