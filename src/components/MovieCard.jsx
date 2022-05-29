import React from "react";

export const MovieCard = ({ data }) => {
  return (
    <div className="bg-secondary-color cursor-pointer transition-all duration-300 hover:scale-105 hover:transition-all hover:duration-300">
      <div>
        <div className="h-80">
          <img
            className="w-full h-full p-3"
            src={data.Poster}
            alt={data.Title}
          />
        </div>
        <div>
          <div className="text-font-primary p-3">
            <h4 className="text-xl mb-2 font-normal">{data.Title}</h4>
            <p>{data.Year}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
