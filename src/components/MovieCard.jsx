import React from "react";

export const MovieCard = ({ data }) => {
  return (
    <div>
      <div>
        <div>
          <img src={data.Poster} alt={data.Title} />
        </div>
        <div>
          <div>
            <h4>{data.Title}</h4>
            <p>{data.Year}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
