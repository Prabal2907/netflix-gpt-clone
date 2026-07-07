import React, { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/api";
import { useDispatch } from "react-redux";
import { addGptMovies } from "../utils/GptSlice";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  //handling the search in tmdb
  const SearchingMoviesInTmdb = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS,
    );
    const json = await data.json();
    return json?.results?.[0];
  };

  const handleGptSearchClick = async () => {
    const prompt =
      "You are a movie recommendation system. Based on the user's query, respond with ONLY the top 5 movie or web series names as a numbered list. Do not add any summary, description,actors,release year, or explanation. Just the names, nothing else..give me the movies or series name in a single line with comma separated type without the numbers..without preferring any specific actor";
    const completion = await openai.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        { role: "system", content: prompt },
        { role: "user", content: searchText.current.value },
      ],
    });

    if (!completion.choices[0]) return "Nothing such foud here";
    const moviesList = completion.choices[0].message.content.split(",");

    //yeh promises ki array dega
    const PromiseArray = moviesList.map((movie) =>
      SearchingMoviesInTmdb(movie),
    );

    //resolving promises
    const tmdbResult = await Promise.all(PromiseArray);
    console.log(tmdbResult);

    dispatch(
      addGptMovies({
        MovieNames: moviesList,
        MovieResults: tmdbResult,
      }),
    );
  };

  return (
    <div className="relative w-full py-14 md:py-20 px-4 overflow-hidden bg-gradient-to-b from-gray-900 via-black to-black border-b border-gray-800">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/8027eb3f-343a-499d-9892-e683c12e3cb1/web/IN-en-20260608-TRIFECTA-perspective_d70af879-e407-4aee-8615-4c82210065d5_large.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        onError={(e) => {
          e.target.style.display = "none";
        }}
      />

      <div className="relative z-10 max-w-xl mx-auto text-center">
        <h1 className="text-white text-xl md:text-3xl font-bold mb-4">
          What would you like to watch?
        </h1>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row items-center gap-3"
        >
          <input
            className="w-full py-3 px-4 rounded-md bg-black/70 border border-gray-500 text-white placeholder:text-gray-400 outline-none focus:border-white transition-colors"
            type="text"
            ref={searchText}
            placeholder="e.g. bollywood funny retro movies"
          />
          <button
            type="submit"
            className="w-full sm:w-auto whitespace-nowrap text-white bg-red-600 hover:bg-red-700 transition-colors px-8 py-3 rounded-md font-semibold"
            onClick={handleGptSearchClick}
          >
            Search
          </button>
        </form>
        <div className="absolute bottom-0 left-0 bg-gradient-to-b from-black to-transparent"></div>
      </div>
    </div>
  );
};
export default GptSearchBar;
