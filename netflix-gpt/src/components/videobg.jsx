import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/api";

const Videobg = ({ movieId }) => {
  const [trailerId, settrailerId] = useState(null);

  const fetch_trailer = async () => {
    if (!movieId) return;

    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS,
    );

    const real_res = res.data.results.filter(
      (video) => video.type === "Trailer",
    );

    const trailer = real_res.length ? real_res[0] : res.data.results[0];
    settrailerId(trailer.key);
  };

  useEffect(() => {
    fetch_trailer();
  }, [movieId]);

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
      {" "}
      <div className="overflow-hidden w-full h-full">
        <iframe
          className="w-full h-full scale-[1.5] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerId}&modestbranding=1&rel=0&enablejsapi=1`}
          title="trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <div className="absolute  bottom-0 left-0 w-full h-48" />
    </div>
  );
};

export default Videobg;
