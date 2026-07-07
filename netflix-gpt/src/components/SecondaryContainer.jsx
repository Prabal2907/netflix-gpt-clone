import React from "react";
import MovieCards from "./MovieCards";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {

  const Movies = useSelector((store)=>store.movies);
  if(!Movies) return null;

  return (
    <div className="bg-black">
      <div className="-mt-20">
        <MovieList title={"Now Playing"} movies={Movies.NowPlayingMovies} />
        <MovieList title={"Top Rated Movies"} movies={Movies.TopRatedMovies} />
        <MovieList
          title={"TV Shows Airing Today"}
          movies={Movies.AiringTodayTV}
        />
        <MovieList title={"Top Rated TV Shows"} movies={Movies.TopRatedTV} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
