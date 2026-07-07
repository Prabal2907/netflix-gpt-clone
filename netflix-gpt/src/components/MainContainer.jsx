import React from "react";
import { useSelector } from "react-redux";
import Videotitle from "./videotitle.jsx";
import Videobg from "./videobg.jsx";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.NowPlayingMovies);
  if (!movies) return null;

  const { title, overview, id } = movies[2];

  return (
    <div className="relative w-full" style={{ height: "100vh" }}>
      <Videobg movieId={id} />
      <Videotitle title={title} overview={overview} />
    </div>
  );
};

export default MainContainer;
