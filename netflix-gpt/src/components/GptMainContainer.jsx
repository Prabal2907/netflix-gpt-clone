import React from "react";
import { useSelector } from "react-redux";

const GptMainContainer = () => {
  const { MovieNames, MovieResults } = useSelector((store) => store.gpt);

  if (!MovieResults) {
    return (
      <div className="text-center text-white py-20">
        Search for something above to see recommendations here.
      </div>
    );
  }

  return (
    <div className="bg-black pt-6 pb-16 px-4 md:px-8">
      <h2 className="text-white text-lg md:text-xl font-semibold mb-4">
        Recommended for you
      </h2>

      <div className="flex gap-4 overflow-x-scroll scrollbar-hide pb-2">
        {MovieResults.map((movie, idx) => {
          if (!movie) return null;

          return (
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
              <p className="text-white text-xs mt-1 px-1 truncate">
                {movie.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GptMainContainer;