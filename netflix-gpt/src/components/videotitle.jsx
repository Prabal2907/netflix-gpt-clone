import React from "react";

const Videotitle = ({ title, overview }) => {
  return (
    <div
      className="absolute left-0  flex flex-col justify-end px-12 pb-10 py-64 bg-gradient-to-b from-black w-full "
    >
      <h1
        className="text-white font-bold mb-3 drop-shadow-lg"
        style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", maxWidth: "500px" }}
      >
        {title}
      </h1>
      <p
        className="text-white text-sm font-bold mb-6 leading-relaxed"
        style={{
          maxWidth: "380px",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {overview}
      </p>
      <div className="flex gap-3">
        <button className="flex items-center gap-2 bg-white text-black font-bold px-7 py-2 rounded-md hover:bg-gray-200 transition text-sm">
          ▶ Play
        </button>
        <button
          className="flex items-center gap-2  text-white font-bold px-7 py-2 rounded-md transition text-sm"
          style={{ background: "rgba(109, 109, 110, 0.7)" }}
        >
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default Videotitle;
