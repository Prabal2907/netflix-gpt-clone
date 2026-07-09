import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL || "http://localhost:5000",
  withCredentials: true,
});

export const MOVIE_URL =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";
export const TV_URL =
  "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1";
export const HIGH_RATED_MOVIE =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
export const HIGH_RATED_TV =
  "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1";
export const MOVIES_ON_SEARCH =
  "https://api.themoviedb.org/3/search/movie?query=andaz%20apna%20apna&include_adult=false&language=en-US&page=1";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_KEY}`,
  },
};

//yt constant
export const YT_API_FOR_TRAILER = (val) => {
  const res = `https://www.youtube.com/watch?v=${val}`;
  return res;
};
YT_API_FOR_TRAILER("gMC8kkwbIQQ");

export const IMG_URL = "https://image.tmdb.org/t/p/w500/";
