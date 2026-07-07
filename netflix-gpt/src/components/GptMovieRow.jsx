import React from "react";

const GptMovieRow = ({ title, movies }) => {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="mb-8">
      <h2 className="text-white text-lg md:text-xl font-semibold mb-3 px-4 md:px-8">
        {title}
      </h2>

      <div className="flex gap-3 overflow-x-scroll scrollbar-hide px-4 md:px-8 pb-2">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="flex-shrink-0 w-32 md:w-40 rounded-md overflow-hidden bg-gray-900 hover:scale-105 transition-transform cursor-pointer"
          >
            {movie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-44 md:h-56 object-cover"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-44 md:h-56 flex items-center justify-center bg-gray-800 text-gray-400 text-xs text-center p-2">
                {movie.title}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GptMovieRow;