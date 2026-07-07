import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMainContainer from "./GptMainContainer";

const GptSearch = () => {
  return (
    <div className="bg-black min-h-screen">
      <GptSearchBar />
      <GptMainContainer/>
    </div>
  );
};

export default GptSearch;
