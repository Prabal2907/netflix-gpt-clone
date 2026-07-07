import React from "react";
import { IMG_URL } from "../utils/api";

const MovieCards = ({ posterPath }) => {
  return (
    <div className="w-36 md:w-36 mb-3 flex-shrink-0 mx-2 ">
      <img
        className="   
        object-center    
          rounded-lg
          my-4
          hover:brightness-105
          transition-all
          duration-200
          hover:scale-105 "
        alt="Movie posters"
        src={IMG_URL + posterPath}
      />
    </div>
  );
};

export default MovieCards;
