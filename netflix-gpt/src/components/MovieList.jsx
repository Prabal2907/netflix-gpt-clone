import React from "react";
import MovieCards from "./MovieCards";

const MovieList = ({ title, movies }) => {
  if (!movies) return null;

  return (
    <div className="mt-2 relative z-20 ">
      <h1 className="text-white text-lg -mb-4 font-bold px-4">{title}</h1>
      <div className="flex px-1 overflow-x-scroll scrollbar-hide">
        {movies.map((movie) => (
          <MovieCards key={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
