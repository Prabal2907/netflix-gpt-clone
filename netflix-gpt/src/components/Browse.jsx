import React, { useEffect } from "react";
import Header from "./Header.jsx";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addUser, removeUser } from "../utils/userSlice.js";
import {
  API_OPTIONS,
  HIGH_RATED_MOVIE,
  HIGH_RATED_TV,
  MOVIE_URL,
  TV_URL,
} from "../utils/api.js";
import MainContainer from "./MainContainer.jsx";
import SecondaryContainer from "./SecondaryContainer.jsx";
import {
  addNowPlayingMovies,
  addNowPlayingTV,
  addNowHighMovies,
  addNowHighTv,
} from "../utils/MovieSlice.js";
import GptSearch from "./GptSearch.jsx";

const Browse = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const FetchUser = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/user/profile", {
        withCredentials: true,
      });
      dispatch(addUser(res.data.user_profile));
    } catch (err) {
      console.log("Invalid token");
      dispatch(removeUser());
      navigate("/");
    }
  };

  useEffect(() => {
    FetchUser();
  }, []);

  //making an api call for movies
  const fetching_movies = async () => {
    const res = await axios.get(MOVIE_URL, API_OPTIONS);
    dispatch(addNowPlayingMovies(res.data.results));
  };

  const Fetching_high_movies = async () => {
    const res = await axios.get(HIGH_RATED_MOVIE, API_OPTIONS);
    dispatch(addNowHighMovies(res.data.results));
  };

  const Fetching_tv = async () => {
    const res = await axios.get(TV_URL, API_OPTIONS);
    dispatch(addNowPlayingTV(res.data.results));
    console.log(res.data.results);
  };

  const Fetching_high_rated_tv = async () => {
    const res = await axios.get(HIGH_RATED_TV, API_OPTIONS);
    dispatch(addNowHighTv(res.data.results));
  };

  useEffect(() => {
    fetching_movies();
    Fetching_tv();
    Fetching_high_movies();
    Fetching_high_rated_tv();
  }, []);

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  return (
    <div className="relative">
      <Header />
      {showGptSearch ? (
        <>
          <GptSearch />
        </>
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
